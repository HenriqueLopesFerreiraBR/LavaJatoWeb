const FuncionarioModel = require("../models/Funcionario");

const FuncionarioController = {
    getAll: async (req, res) => {
        try {
            const funcionarios = await FuncionarioModel.find();
            res.status(200).json(funcionarios);
        } catch (error) {
            res.status(400).json(error);
        }
    },
    getId: async (req, res) => {
        try {
            const id = req.params.id;
            const funcionario = await FuncionarioModel.findById(id);
            res.status(200).json(funcionario);
        } catch (error) {
            res.status(400).json(error);
        }
    },
    create: async (req, res) => {
        try {
            const { nome, funcao, horarioTrabalho } = req.body;

            const newFuncionario = FuncionarioModel({
                nome: nome,
                funcao: funcao,
                horarioTrabalho: horarioTrabalho,
            });

            await newFuncionario.save();
            res.status(201).json("Funcionario cadastrado com sucesso");
        } catch (error) {
            res.status(433).json(error);
        }
    },
    update: async (req, res) => {
        try {
            const id = req.params.id;
            const { nome, funcao, horarioTrabalho } = req.body;
            const funcionarioUpdated = {
                nome: nome,
                funcao: funcao,
                horarioTrabalho: horarioTrabalho,
            };
            await FuncionarioModel.findByIdAndUpdate(id, funcionarioUpdated, {
                force: true,
            });
            res.status(203).json({
                message: "funcionario atualizado",
                funcionarioUpdated,
            });
        } catch (error) {
            res.status(433).json(error);
        }
    },
    delete: async (req, res) => {
        try {
            const id = req.params.id;

            const deleted = await FuncionarioModel.findByIdAndDelete(id);
            res.status(205).json("Funcionario deletado");
        } catch (error) {
            res.status(433).json(error);
        }
    },
    RegistrarPonto: async (req, res) => {},

    CalcularSalario: async (req, res) => {},
};

module.exports = FuncionarioController;
