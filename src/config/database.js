/**
 * Conexão com o Mongo
 */

const mongoose = require('mongoose')

/* remover advertencia usando a promise do node */
 mongoose.Promise = global.Promise

 module.exports = mongoose.connect("mongodb+srv://alecio:alecio10@cluster0-vah56.gcp.mongodb.net/test?retryWrites=true&w=majority")