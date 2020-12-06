module.exports = (response) => {
  response.statusCode = 500;
  const jsonMessage = {
    message: "Caminho não definido",
  };

  response.end(JSON.stringify(jsonMessage));
};
