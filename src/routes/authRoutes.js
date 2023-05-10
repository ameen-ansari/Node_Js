const express = require('express')
const { logIn, signUp } = require('../controllers/authControllers')
const route = express.Router()

route.post('/signup', signUp)

route.post('/login', logIn)

module.exports = route