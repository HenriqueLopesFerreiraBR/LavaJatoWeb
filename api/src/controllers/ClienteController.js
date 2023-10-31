const Cliente = require("../models/Cliente");
const ClienteModel = require("../models/Cliente");

const ClienteController = {
    getAll: async (req, res) => {
        try {
            const clientes = await ClienteModel.find();
            res.status(200).json(clientes);
        } catch (error) {
            res.status(400).json(error);
        }
    },
    getId: async (req, res) => {
        const id = req.params.id;
        try {
            const cliente = await ClienteModel.findById(id);
            res.status(200).json(cliente);
        } catch (error) {
            res.status(400).json(error);
        }
    },
    create: async (req, res) => {
        try {
            const { nome, contato, endereco } = req.body;

            if (nome === " " || !nome) {
                return res.status(433).json("Nome do cliente Invalido");
            }
            if (contato === " " || !contato) {
                return res.status(433).json("Nome do cliente Invalido");
            }

            const newCliente = ClienteModel({
                nome: nome,
                contato: contato,
                endereco: endereco,
            });

            await newCliente.save();
            res.status(201).json("Cliente cadastrado com sucesso");
        } catch (error) {
            res.status(433).json(error);
        }
    },
    update: async (req, res) => {
        try {
            const id = req.params.id;
            const { nome, contato, endereco } = req.body;

            const clienteUpdated = {
                nome: nome,
                contato: contato,
                endereco: endereco,
            };
            await ClienteModel.findByIdAndUpdate(id, clienteUpdated, {
                new: true,
            });

            await newCliente.save();
            res.status(201).json({message:"Cliente Atualizado com sucesso", clienteUpdated});
        } catch (error) {
            res.status(433).json(error);
        }
    },
    delete: async (req,res)=>{
        try {
            const id = req.params.id
            if(!id){
                return res.status(433).json("id do cliente Invalido");
            }
            await ClienteModel.findByIdAndDelete(id)

            res.status(205).json("Cliente Deletado com sucesso");
        } catch (error) {
             res.status(400).json(error);
        }
    },
    AgendarServico: async(req,res)=>{
        
    },
    
    RealizarPagamento: async(req,res)=>{

    }
};

module.exports = ClienteController;
