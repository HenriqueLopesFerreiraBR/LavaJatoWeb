const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const DB = require('./src/database/connect')
dotenv.config()

//variaveis
const port = process.env.PORT

//Rotas
// const TarefasRouter = require('./src/router/tarefaRouter')
// const CategoriaRouter = require('./src/router/categoriaRouter')

//middleware

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(cors())

//chamada do banco de dados
DB.connection


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Servidor rodando na porta ${port}!`))