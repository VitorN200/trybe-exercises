
const adicao = require('./adicao');
const subtracao = require('./subtracao');
const multiplicacao = require('./multiplicacao');
const divisao = require('./divisao');
const verificaParametro = require('./verificaParametro');
const tratamentoErro = require('./tratamentoErro');

module.exports = {
  verificaParametro, adicao, subtracao, multiplicacao, divisao, tratamentoErro
};
