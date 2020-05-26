const restful = require('node-restful')
const mongoose = restful.mongoose

const tarefasSchema = new mongoose.Schema({
    descricao: { type: String, required: true },
    completo: { type: Boolean, require: true, default: false },
    dataCriacao: { type: Date, default: Date.now },
    dataConclusao: { type: Date, require: false },
    tipo : { type: String, required: false, default: '' }
})

module.exports = restful.model('Tarefas', tarefasSchema)