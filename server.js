const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Middleware para processar dados no formato JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Servir arquivos estáticos (HTML, CSS e JavaScript)
app.use(express.static('public'));

// Rota para processar os dados do formulário
app.post('/submit-form', (req, res) => {
    const { nome, sobrenome, email, genero, telefone, dataNascimento, cpf } = req.body;
    console.log('Dados recebidos:', req.body);

    // Envia uma resposta JSON com os dados recebidos
    res.json({ nome, sobrenome, email, genero, telefone, dataNascimento, cpf });
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
