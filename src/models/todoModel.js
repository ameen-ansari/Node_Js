const mongoose = require('mongoose')

const todoSchema = mongoose.model('todos', new mongoose.Schema({
    description: {
        required: true,
        type: String,
    },
    id: {
        type: String,
        unique: true,
        required: true
    },
    date: Date
}));

module.exports = todoSchema