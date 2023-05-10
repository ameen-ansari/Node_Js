const todoSchema = require('../models/todoModel')
var uniqid = require('uniqid');

const read = async (req, res) => {
    try {
        let todos = await todoSchema.find()
        res.send({
            message: 'success',
            data: todos
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
        const todo = new todoSchema({
            description: req.body.description,
            date: Date.now(),
            id: uniqid()
        })
        await todo.save()
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
        await todoSchema.updateOne({ id: req.params.id }, { $set: { description: req.body.description } })
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
        await todoSchema.deleteOne({ id: req.params.id })
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
        let todo = await todoSchema.findOne({ id: req.params.id })
        res.send({
            message: 'success',
            data: todo
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