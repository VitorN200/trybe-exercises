const express = require('express');
const middleware = require('./Middlewares');

const app = express();

app.get('/:operacao/:numero1/:numero2', Object.values(middleware)
);

app.listen(3000, () => {
  console.log("App rodando na porta 3000");
});

