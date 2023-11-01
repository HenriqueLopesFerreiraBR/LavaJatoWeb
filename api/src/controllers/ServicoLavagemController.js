const ServicoLavagemModel = require("../models/ServicoLavagem");

const servicoLavagemController = {
    getAll: async (req, res) => {
        try {
            const servicos = await ServicoLavagemModel.find();
            res.status(200).json(servicos);
        } catch (error) {
            res.status(400).json(error);
        }
    },
    getId: async (req, res) => {
        try {
            const id = req.params.id;
            const servisoLavagem = await ServicoLavagemModel.findById(id);
            res.status(200).json(servisoLavagem);
        } catch (error) {
            res.status(400).json(error);
        }
    },
    create: async (req, res) => {
        try {
            const { tipo, preco, modelo, marca, placa, horario } = req.body;

            const newServisoLavagem = ServicoLavagemModel({
                tipo: tipo,
                preco: preco,
                veiculo: {
                    modelo: modelo,
                    marca: marca,
                    placa: placa,
                },
                horario: horario,
            });

            await newServisoLavagem.save();
            res.status(201).json("servisoLavagem cadastrado com sucesso");
        } catch (error) {
            res.status(433).json(error);
        }
    },
    update: async (req, res) => {
        try {
            const id = req.params.id;
            const { tipo, preco, modelo, marca, placa, horario } = req.body;
            const servisoLavagemUpdated = {
                tipo: tipo,
                preco: preco,
                veiculo: {
                    modelo: modelo,
                    marca: marca,
                    placa: placa,
                },
                horario: horario,
            };
            await ServicoLavagemModel.findByIdAndUpdate(
                id,
                servisoLavagemUpdated,
                { force: true }
            );
            res.status(203).json({
                message: "servisoLavagem atualizado",
                servisoLavagemUpdated,
            });
        } catch (error) {
            res.status(433).json(error);
        }
    },
    delete: async (req, res) => {
        try {
            const id = req.params.id;

            const deleted = await ServicoLavagemModel.findByIdAndDelete(id);
            res.status(205).json("servisoLavagem deletado");
        } catch (error) {
            res.status(433).json(error);
        }
    },
    IniciarLavagem: async (req, res) => {},

    FinalizarLavagem: async (req, res) => {},
};

module.exports = servicoLavagemController;
