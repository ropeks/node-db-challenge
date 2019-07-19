const express = require('express');
const db = require('./data/projects-model.js');
const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.json({ message: 'welcome to the projects API' });
});

module.exports = server;