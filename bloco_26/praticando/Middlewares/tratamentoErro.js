module.exports = (err, req, res, next) => {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
};
