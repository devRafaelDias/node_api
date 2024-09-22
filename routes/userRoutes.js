// routes/userRoutes.js
const { log } = require('console');
const express = require('express');
const mysql = require('mysql2');

const router = express.Router();

// Configuração da conexão com o banco de dados
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

// Conectar ao banco de dados
db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conectado ao banco de dados MySQL');
});

// Rota para obter todos os usuários
router.get('/', (req, res) => {
    db.query('SELECT * FROM test_db.usuarios', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        console.log(results);
        
        res.json(results);
    });
});

module.exports = router;