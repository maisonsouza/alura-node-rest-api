module.exports = app => {
    app.get('/atendimentos', function (req, res) {
        res.send('Você está na rota de atendimentos e está realizando um GET')
    })
    app.post('/atendimentos', function (req, res) {
        res.send('Você está na rota de atendimentos e está realizando um POST')
    })
}
