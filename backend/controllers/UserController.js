const User = require('../models/User');

const UserController = {
    async create(req, res) {
        try {
            const { user } = req.body;
            if (await User.findOne({ user })) {
                res.json({ Status: `${user} already registered` })
            } else {
                await User.create(req.body)
                return res.json({ Status: `${user} sucessfully created` })
            }
        }
        catch (err) {
            return res.json({ Status: "Error, Not Create" })
        }
    },

    async read(req, res) {
        try {
            return res.json(await User.find())
        }
        catch (err) {
            return res.json({ Status: "Error, Not Create" })
        }
    },

    async getOne(req, res) {
        try {
            const id = req.params.id;
            const getOne = await User.findById(id)
            if (getOne) {
                return res.json(await User.findById(id))
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
            return res.json(await User.findByIdAndUpdate(id, req.body))
        }
        catch (err) {
            return res.json({ Status: "Error" })
        }
    },

    async delete(req, res) {
        try {
            const id = req.body._id;
            const obj = await User.findByIdAndDelete(id)
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

module.exports = UserController;