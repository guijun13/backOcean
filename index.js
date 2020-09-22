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

const mensagens = [
  "Mensagem 0",
  "Mensagem 1"
];

// Read all
app.get('/mensagens', (req, res) => {
  res.json(mensagens);
});

// Create
app.post('/mensagens', (req, res) => {

  // Obtendo a mensagem que foi recebida através do body da requisição
  const mensagem = req.body.mensagem;
  // Insiro a mensagem na lista de mensagens
  mensagens.push(mensagem);

  // Define o id da mensagem criada
  const id = mensagens.length - 1;

  // Exibido o ID e mensagem, que no caso é o índice que ela foi adicionada
  res.send(`Mensagem: ${mensagem} de id: ${id} foi criada`);
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

  // const mensagem = mensagens[id];

  mensagens[id] = req.body.mensagem;

  res.send(`${id} Atualiza uma mensagem selecionada pelo id informado`);
});

// Delete one
app.delete('/mensagens/:id', (req, res) => {
  res.send('Remove uma mensagem selecionada pelo id informado');
});

app.listen(port, () => {
  console.log(`App rodando em http://localhost:${port}`);
});
