const mongoose= require('mongoose');

const ClienteSchema = new mongoose.Schema({
    nome:{
        type:String
    },
    contato:{
        type:String
    },
    endereco:{
        type:String
    }
})

module.exports = mongoose.model('Cliente',ClienteSchema);