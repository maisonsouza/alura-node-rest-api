const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello World')
})
app.get('/atendimentos', function (req, res) {
    res.send('Você está na rota de atendimentos e está realizando um GET')
})

app.listen(3000,()=>console.log("Servidor rodando na porta 3000"));
