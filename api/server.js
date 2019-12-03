const express = require("express");

const hubsRouter = require("../hubs/hubs-router");

const server = express();

server.use(express.json()); // LOOK! Routers can have it's own middleware

server.get("/", (req, res) => {
  res.send(`
    <h2>Lambda Hubs API</h>
    <p>Welcome to the Lambda Hubs API</p>
  `);
});

server.use("/api/hubs", hubsRouter);

// add an endpoint that returns all the messages for a hub
// add an endpoint for adding new message to a hub

//export default server; // ES6 module
module.exports = server; //<<<<<<<<<<<<<< export the server
