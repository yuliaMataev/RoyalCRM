const http = require("http");

http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/plane" });
    response.end("Hi Im back");
  })
  .listen(3001);
console.log("server running at http://127.0.0.1:3001");
