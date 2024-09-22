// server.js
const express = require('express');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para analisar JSON
app.use(express.json());

// Usar as rotas de usuário
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});