const mongoose = require("mongoose");

const ServicoLavagem = new mongoose.Schema(
    {
        tipo: {
            type: String,
        },
        preco: {
            type: Number,
        },
        veiculo: {
            modelo: {
                type: String,
            },
            marca: {
                type: String,
            },
            placa: {
                type: String,
            },
        },
        horario: {
            type: String,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("ServicoLavagem", ServicoLavagem);
