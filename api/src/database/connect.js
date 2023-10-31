const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connection = mongoose
    .connect(process.env.URL_DB)
    .then(console.log("Banco de dados conectado com sucesso"))
    .catch((error) => {
        console.log(error);
    });

module.exports = connection;
