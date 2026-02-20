const express = require('express');

const app = express();

app.get('/users', (req, res) => {
  res.json([]);
});

app.get('/users/:id', (req, res) => {
  res.json({ id: req.params.id });
});

app.post('/users', (req, res) => {
  res.json(req.body);
});

app.put('/users/:id', (req, res) => {
  res.json(req.body);
});

app.delete('/users/:id', (req, res) => {
  res.json({ id: req.params.id });
});

app.listen(3000);


module.exports = app;
