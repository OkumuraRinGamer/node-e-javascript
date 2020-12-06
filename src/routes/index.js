const database = [
  {
    id: 1,
    name: "Gabriel",
    year: 1999,
    age: 21,
  },
];

const routes = {
  "get:/": (request, response) => {
    const allItems = JSON.stringify(database);

    response.end(allItems);
  },
  "post:/": (req, res) => {
    database.push(req.body);

    res.end(JSON.stringify(req.body));
  },
};

module.exports = routes;
