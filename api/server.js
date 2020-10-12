const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const BudgetRouter = require("../budget/expenses.router.js");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get("/", (_, res) => {
    res.status(200).json({ api: "up" });
  });

  server.use("/api/budget", BudgetRouter);

module.exports = server;