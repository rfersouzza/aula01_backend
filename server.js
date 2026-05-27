const express = require('express');
const path = require( 'path');

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});
app.post('/login', (req, res) =>{
    const email = req.body.email;
    const senha = req.body.senha;

    console.log('E-mail recebido:', email);
    console.log('Senha recebida:', senha);

    res.send(`
        <h1>Dados recebidos pelo servidor</h1>
        <p>E-mail: ${email}</p>
        <p>Senha: ${senha}</p>
        <a href="/login">Voltar</a>
        `);
});

app.get('/cadastro', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'cadastro.html'));
});
app.post('/cadastro', (req, res) => {
    const nome = req.body.nome;
    const email = req.body.email;
    const senha = req.body.senha;

    console.log('Cadastro recebido:');
    console.log('Nome:', nome);
    console.log('E-mail:', email);
    console.log('Senha:', senha);

    res.send(`
        <h1>Cadastro recebido pelo servidor</h1>
        <p>Nome: ${nome}</p>
        <p>E-mail: ${email}</p>
        <p>Senha: ${senha}</p>
        <a href="/cadastro">Voltar</a>
        `);
});

app.get('/contato', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contato.html'));
});
app.post('/contato', (req, res) => {
    const nome = req.body.nome;
    const email = req.body.email;
    const mensagem = req.body.mensagem;

    console.log('Mensagem recebida:');
    console.log('Nome:', nome);
    console.log('E-mail:', email);
    console.log('Mensagem:', mensagem);

    res.send(`
        <h1>Mensagem recebida pelo servidor</h1>
        <p>Nome: ${nome}</p>
        <p>E-mail: ${email}</p>
        <p>Mensagem: ${mensagem}</p>
        <a href="/contato">Voltar</a>
        `);
});


app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});