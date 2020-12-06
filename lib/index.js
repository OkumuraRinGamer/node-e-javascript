const http = require("http");
const assembleQuery = require("./utils/assembleQuery");
const noRotesException = require("./utils/noRoutesException");

function createServer(routes) {
  const server = http.createServer((request, response) => {
    response.setHeader("Content-Type", "application/json");

    const pathname = assembleQuery(request);
    const routePath = `${request.method.toLowerCase()}:${pathname}`;

    let body = [];

    request.on("data", (chunk) => {
      body = [...body, chunk];
    });

    request.on("end", () => {
      body = Buffer.concat(body).toString();

      if (body) {
        request.body = JSON.parse(body);
      }

      if (routePath in routes) {
        return routes[routePath](request, response);
      }

      request.body;

      noRotesException(response);
    });
  });

  return server;
}

module.exports = createServer;
