const express = require('express');
const app = express();

app.use(express.json()); 

const usersRoutes = require('./routes/users.routes');
app.use('/users', usersRoutes);

const errorHandler = require('./middleware/error.middleware');
app.use(errorHandler);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});