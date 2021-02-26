'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

const sayHello = (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  const name = req.params.name || 'Unbekannter';
  res.end(JSON.stringify({ message: `Hello ${name}!!`}));  
};

// App
const app = express();

app.get('/', sayHello);

app.get('/:name', sayHello);

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);