let users = [];

// get all users
const getAllUsers = (req, res) => {
    res.json(users);
};

// get user by ID
const getUserById = (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        const user = users.find(user => user.id === id);

        if (!user) {
            const error = new Error('User not found');
            error.status = 404;
            return next(error);
        }

        res.json(user);
    } catch (err) {
        next(err);
    }
};

// create user
const createUser = (req, res, next) => {
    try {
        const { name, email } = req.body;

        if (!name || !email) {
            const error = new Error('Name and email are required');
            error.status = 400;
            return next(error);
        }

        const newUser = {
            id: users.length ? users[users.length - 1].id + 1 : 1,
            name,
            email
        };

        users.push(newUser);

        res.status(201).json(newUser);
    } catch (err) {
        next(err);
    }
};

// update user
const updateUser = (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        const { name, email } = req.body;
        const user = users.find(user => user.id === id);

        if (!user) {
            const error = new Error('User not found');
            error.status = 404;
            return next(error);
        }

        if (name) user.name = name;
        if (email) user.email = email;

        res.json(user);
    } catch (err) {
        next(err);
    }
};

// delete user
const deleteUser = (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        const index = users.findIndex(user => user.id === id);

        if (index === -1) {
            const error = new Error('User not found');
            error.status = 404;
            return next(error);
        }

        const deletedUser = users.splice(index, 1);

        res.json(deletedUser[0]);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};