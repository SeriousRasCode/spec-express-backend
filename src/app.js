const express = require('express');
const app = express();

app.use(express.json()); 

const usersRoutes = require('./routes/users.routes');
app.use('/users', usersRoutes);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});