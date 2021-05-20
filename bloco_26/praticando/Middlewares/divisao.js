module.exports = (req, res, next) => {
  const { operacao, numero1, numero2 } = req.params;
  if (operacao === 'divisao') {
    if (numero2 == 0) {
      next({ message: 'Nao dividiras por 0' });
    }
    const resultado = parseInt(numero1) / parseInt(numero2);
    res.status(200).send(`Resultado: ${resultado}`)
  }
  next();
}
