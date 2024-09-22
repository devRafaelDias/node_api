CREATE DATABASE test_db;

USE test_db;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL
);


INSERT INTO usuarios (nome, email) VALUES ('João', 'joao@example.com');
INSERT INTO usuarios (nome, email) VALUES ('Maria', 'maria@example.com');