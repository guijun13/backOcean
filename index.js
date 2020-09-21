const express = require('express');
const app = express();
const port = 3000;

app.get('/', function(request, response){
  response.send('GET Hello World!');
});

app.post('/', function(request, response){
  response.send('POST Hello World!');
})

app.listen(port, function(){
  console.log(`App rodando em http://localhost:3000`);
})
