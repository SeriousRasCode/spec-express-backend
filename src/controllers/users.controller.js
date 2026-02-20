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