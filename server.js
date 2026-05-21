const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Pagina inicial com Express');
});

app.get('/sobre', (req, res) => {
    res.send('Pagina sobre com Express');
});

app.get('/contato', (req, res) => {
    res.send('Pagina de contato com Express');
});

app.get('/produtos', (req, res) => {
    res.send('Produtos em lista');
});

app.get('/servicos', (req, res) => {
    res.send('Lista de serviços');
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});