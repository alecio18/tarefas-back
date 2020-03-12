const Tarefas = require('./tarefas')

Tarefas.methods(['get', 'post', 'put', 'delete'])
/**
 * Trazer o elemento atualizado após o post
 * validar os dados durante o post
 */
Tarefas.updateOptions({ new: true, runValidators: true })

module.exports = Tarefas