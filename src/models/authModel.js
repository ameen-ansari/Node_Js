const mongoose = require('mongoose')

const userSchema = mongoose.model('users', new mongoose.Schema({
    f_N: String,
    l_N: String,
    email: {
        type: String,
        unique: true,
        required: true
    },
    id: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    }
}));

module.exports = userSchema