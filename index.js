const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.use(express.json());

const mockUser = {
    email: 'user@toolz.com',
    password: 'password123'
};

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    if (email === mockUser.email && password === mockUser.password) {
        res.status(200).json({ message: 'Logado com Sucesso!' });
    } else {
        res.status(401).json({ message: 'Email ou senha inválidos' });
    }
});

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));