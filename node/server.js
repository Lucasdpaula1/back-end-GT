const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Espero que tenham gostado da aula introdutoria ao nodeJs");
});

server.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
