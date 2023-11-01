const mongoose = require("mongoose");

const FuncionarioSchema = new mongoose.Schema(
    {
        nome: {
            type: String,
            required: true,
        },
        funcao: {
            type: String,
        },
        horarioTrabalho: {
            type: String,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("funcionario", FuncionarioSchema);
