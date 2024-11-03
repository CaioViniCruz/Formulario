const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post(async (req, res) => {
    const { nome, sobrenome, email, genero, telefone, dataNascimento, cpf } = req.body;

    console.log('Dados recebidos:', req.body);

    // Retorna os dados como confirmação
    res.json({ message: 'Formulário enviado com sucesso!', data: req.body });
});

module.exports = app;
