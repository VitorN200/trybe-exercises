
module.exports = (req, res, next) => {
  const { operacao, numero1, numero2 } = req.params;
  if (operacao === 'adicao') {
    const resultado = parseInt(numero1) + parseInt(numero2);
    res.status(200).send(`Resultado: ${resultado}`)
  }
  next();
}
