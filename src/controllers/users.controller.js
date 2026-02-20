let users = [];

// Get all users
const getAllUsers = (req, res) => {
    res.json(users);
};

// Get user by ID
const getUserById = (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(user => user.id === id);

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    res.json(user);
};

// Create new user
const createUser = (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ message: 'Name and email are required' });
    }

    const newUser = {
        id: users.length ? users[users.length - 1].id + 1 : 1,
        name,
        email
    };

    users.push(newUser);
    res.status(201).json(newUser);
};

// Update user
const updateUser = (req, res) => {
    const id = parseInt(req.params.id);
    const { name, email } = req.body;
    const user = users.find(user => user.id === id);

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    if (name) user.name = name;
    if (email) user.email = email;

    res.json(user);
};

// Delete user
const deleteUser = (req, res) => {
    const id = parseInt(req.params.id);
    const index = users.findIndex(user => user.id === id);

    if (index === -1) {
        return res.status(404).json({ message: 'User not found' });
    }

    const deletedUser = users.splice(index, 1);
    res.json(deletedUser[0]);
};