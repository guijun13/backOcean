/*
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

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

*/

const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');

// Criando e executando um bloco assincrono
(async() => {

  const connectionString = 'mongodb+srv://admin:guijun13AtlasPass@cluster0.xd7o3.mongodb.net/mongoOceanDataBase?retryWrites=true&w=majority';
  
  console.info('Conectando ao banco de dados MongoDB');
  
  const client = await mongodb.MongoClient.connect(connectionString, {
    useUnifiedTopology: true,
  });

  console.info('Banco de dados conectado');

  const app = express();
  const port = process.env.PORT || 3000;

  const jsonParser = bodyParser.json();
  app.use(jsonParser);

  app.get('/', (req, res) => {
      res.send('Hello world com MongoDB!');
  });

  // Endpoints de envio de mensagens
  // CRUD -> Create, Read (Read All e Read Single), Update and Delete
  // CRUD -> Criar, Ler (Ler tudo e ler individualmente), atualizar e remover

  const mensagens = [];

  // Read All
  app.get('/mensagens', (req, res) => {
      res.json(mensagens.filter(Boolean));
  });

  // Create
  app.post('/mensagens', (req, res) => {
  });

  // Read Single
  app.get('/mensagens/:id', (req, res) => {
  });

  // Update
  app.put('/mensagens/:id', (req, res) => {
  });

  // Delete
  app.delete('/mensagens/:id', (req, res) => {
  });

  app.listen(port, () => {
    console.log(`App rodando em http://localhost:${port}`);
  });

})(); // Fechando o bloco assíncrono

