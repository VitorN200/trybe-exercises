module.exports = (req, res, next) => {
  const { operacao, numero1, numero2 } = req.params;
  const operacoes = ['adicao', 'subtracao', 'multiplicacao', 'divisao'];
  if (isNaN(numero1) || isNaN(numero2)) {
    next({ message: 'Valor invalido' });
  }
  if (!operacoes.includes(operacao)) {
    next({ message: 'Operacao invalida' });
  }
  next();
};
