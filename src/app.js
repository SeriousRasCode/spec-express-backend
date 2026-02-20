const express = require('express');

const app = express();

app.use('/users', require('./users.routes'));

app.listen(3000);


module.exports = app;
