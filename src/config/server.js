const porta = 4000

const bodyParser = require('body-parser')
const express = require('express')

const cors = require('./cors')

const server = express()

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(cors)

server.listen(porta, function() {
    console.log(`Back-End executando na porta ${porta}`)
})

module.exports = server