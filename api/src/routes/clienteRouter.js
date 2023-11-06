const express = require('express');
const router = express.Router()
const ClienteController = require('../controllers/ClienteController')

//Rota que seleciona todos os clientes
router.get('/',ClienteController.getAll);

//Rota que seleciona o cliente por ID
router.get('/:id',ClienteController.getId);

//Rota que cadastra um novo cliente
router.post('/',ClienteController.create);

//Rota para atualizar o cadastro de um Cliente utilizando o ID do cliente
router.put('/:id',ClienteController.update);

//Rota para deleta o cadastro de um Cliente utilizando o ID do cliente 
router.delete('/:id',ClienteController.delete);


module.exports = router