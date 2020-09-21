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
  "Mensagem 1",
  "Mensagem 2"
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

  const id = mensagens.length - 1;

  res.send(`Criar uma mensagem com o corpo: ${mensagem}`);
  // Exibido o ID da mensagem, que no caso é o índice que ela foi adicionada
  // res.send(`Criar uma mensagem com id: ${id}`);
});

// Read one
app.get('/mensagens/:id', (req, res) => {
  res.send('Exibe uma mensagem selecionada pelo id informado');
});

// Update one
app.put('/mensagens/:id', (req, res) => {
  res.send('Atualiza uma mensagem selecionada pelo id informado');
});

// Delete one
app.delete('/mensagens/:id', (req, res) => {
  res.send('Remove uma mensagem selecionada pelo id informado');
});

app.listen(port, () => {
  console.log(`App rodando em http://localhost:${port}`);
});
