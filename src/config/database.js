/**
 * Conexão com o Mongo
 */

const mongoose = require('mongoose')

/* remover advertencia usando a promise do node */
 mongoose.Promise = global.Promise

 module.exports = mongoose.connect('mongodb://localhost/tarefas')