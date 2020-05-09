const Descriptive = require('../models/Descriptive');

const DescriptiveController = {
    async create(req, res) {
        try {
            const {variable, value} = req.body;
            // a linha abaixo irá separar na onde tiver virgula em um undice de um vetor

            const valor = (value.split(',').map(value => value.trim()))
            console.log(valor)
            // quando for criar os dados no BD o atributo 'value' tem que receber a variável
            // valor para conseguir guardar como vetor
            Descriptive.create({variable, value: valor})
            return res.json(req.body)
        }
        catch (err) {
            return res.json({ Status: "Error" })
        }
    },

    async read(req, res) {
        try {
            return res.json(await Descriptive.find())
        }
        catch (err) {
            return res.json({ Status: "Error" })
        }
    },

    async getOne(req, res) {
        try {
            const id = req.params.id;
            const getOne = await Descriptive.findById(id)
            if (getOne) {
                return res.json(await Descriptive.findById(id))
            }
            else {
                return res.Status(404)
            }
        }
        catch (err) {
            return res.json({ Status: "Error" })
        }
    },

    async update(req, res) {
        try {
            const id = req.body._id;
            return res.json(await Descriptive.findByIdAndUpdate(id, req.body))
        }
        catch (err) {
            return res.json({ Status: "Error" })
        }
    },

    async delete(req, res) {
        try {
            const id = req.body._id;
            const obj = await Descriptive.findByIdAndDelete(id)
            if (obj) {
                res.json({ Status: `${id} sucessful removed` })
            }
            else {
                res.json({ Status: `${id} Not Found` })
            }
        }
        catch (err) {
            return res.json({ Status: "Error" })
        }
    }
}

module.exports = DescriptiveController;