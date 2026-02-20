const { Router } = require('express');
const router = Router();

router.get('/users', (req, res) => {
    res.send('Get all users');
});

router.get('/users/:id', (req, res) => {
    res.send('Get user by id');
});

router.post('/users', (req, res) => {
    res.send('Create a new user');
});

router.put('/users/:id', (req, res) => {
    res.send('Update a user');
});

router.delete('/users/:id', (req, res) => {
    res.send('Delete a user');
});

module.exports = router;
