const server = require("../lib");
const routes = require("./routes");
const port = 3100;

server(routes).listen(port, () => {
  console.clear();
  console.log(`Server on (${port})`);
});
