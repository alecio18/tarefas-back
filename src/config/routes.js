const express = require('express')

module.exports = function(server) {

    // API Routes
    const router = express.Router()
    server.use('/api', router)

    // TODO Routes
    const tarefasService = require('../api/tarefas/tarefasService')
    tarefasService.register(router, '/tarefas')
}