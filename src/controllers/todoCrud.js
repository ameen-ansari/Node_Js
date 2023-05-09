const todoDataType = require('../models/todoCrud')
var uniqid = require('uniqid');

const read = async (req, res) => {
    try {
        let data = await todoDataType.find()
        res.send({
            message: 'success',
            data: data
        })
    } catch (error) {
        res.send({
            message: 'something went wrong',
            error: error
        })
    }
}



const create = async (req, res) => {
    try {
        const userData = new todoDataType({
            description: req.body.description,
            date: Date.now(),
            id: uniqid()
        })
        const result = await userData.save()
        res.send({
            message: 'success',
        })
    } catch (error) {
        res.send({
            message: 'something went wrong',
            error: error
        })
    }
}

const update = async (req, res) => {
    try {
        let data = await todoDataType.updateOne({ id: req.params.id }, { $set: { description: req.body.description } })
        res.send({
            message: 'success',
        })
    } catch (error) {
        res.send({
            message: 'something went wrong',
            error: error
        })
    }
}

const del = async (req, res) => {
    try {
        await todoDataType.deleteOne({ id: req.params.id })
        res.send({
            message: 'success',
        })
    } catch (error) {
        res.send({
            message: 'something went wrong',
            error: error
        })
    }
}

const getTodo = async (req, res) => {
    try {
        let data = await todoDataType.findOne({ id: req.params.id })
        res.send({
            message: 'success',
            data: data
        })
    } catch (error) {
        res.send({
            message: 'something went wrong',
            error: error
        })
    }
}
module.exports = {
    read,
    create,
    update,
    del,
    getTodo
}