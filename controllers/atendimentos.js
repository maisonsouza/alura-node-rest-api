
const Atendimento = require('../models/atendimentos')

module.exports = app => {
    app.get('/atendimentos', function (req, res) {
        res.send('Você está na rota de atendimentos e está realizando um GET');
    })
    app.post('/atendimentos', function (req, res) {
        console.log('Enviando atendimento')
        const atendimento = req.body
        Atendimento.adiciona(atendimento, res)
    })
}


