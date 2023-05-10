const mongoose = require('mongoose');

const userSchema = mongoose.model('myusers', new mongoose.Schema({
    firstName: {
        required: true,
        type: String,
    },
    lastName: {
        required: true,
        type: String,
    },
    email: {
        required: true,
        type: String,
        unique: true,
    },
    id: {
        required: true,
        type: String,
        unique: true,
    },
}));

module.exports = userSchema