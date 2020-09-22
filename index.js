const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const jsonParser = bodyParser.json();
app.use(jsonParser);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// CRUD de uma envio de mensagens

// const mensagens = [
//   "Mensagem 0",
//   "Mensagem 1"
// ];

const mensagens = [
  {
    id: 0,
    texto: "Mensagem 0"
  },
  {
    id: 1,
    texto: "Mensagem 1"
  }

]

// Read all
app.get('/mensagens', (req, res) => {
  res.json(mensagens.filter(Boolean)); // Fornece somente as infos != null
});

// Create
app.post('/mensagens', (req, res) => {

  // Obtendo a mensagem que foi recebida através do body da requisição
  const mensagem = req.body;

  // Define o id da mensagem criada
  const id = mensagens.length;

  // Atualiza o objeto de mensagem enviado pela requisição com o id que foi calculado
  mensagem.id = id;
  
  // Insiro a mensagem na lista de mensagens
  mensagens.push(mensagem);

  // Exibido o ID e mensagem, que no caso é o índice que ela foi adicionada
  res.send(`Mensagem: ${mensagem.texto} de id: ${id} foi criada`);
});

// Read one
app.get('/mensagens/:id', (req, res) => {
  const id = req.params.id; //pega o id atravez dos parametros da req

  const mensagem = mensagens[id]; //acesa a msg conforme o id

  res.json(mensagem);
  // res.json({
  //   id,
  //   mensagem
  // });
});

// Update one
app.put('/mensagens/:id', (req, res) => {
  const id = req.params.id;

  const novoTexto = req.body.texto;

  mensagens[id].texto = novoTexto;

  res.send(`Atualiza uma mensagem de id: ${id}`);
});

// Delete one
app.delete('/mensagens/:id', (req, res) => {

  const id = req.params.id;

  delete mensagens[id];

  res.send(`Removida mensagem de id: ${id}`);
});

app.listen(port, () => {
  console.log(`App rodando em http://localhost:${port}`);
});
