exports.login = (req, res) => {
    const { username, password } = req.body;

    // Simple hardcoded credentials for demonstration
    if (username === 'admin' && password === 'admin') {
        res.status(200).json({
            message: "Login successful",
            token: "dummy-jwt-token-12345",
            user: { username: 'admin' }
        });
    } else {
        res.status(401).json({ message: "Invalid credentials" });
    }
};
