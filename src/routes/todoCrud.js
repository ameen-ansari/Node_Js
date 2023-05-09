const express = require('express')
const route = express.Router()
const { read, create, update, del, getTodo } = require('../controllers/todoCrud');

route.get('/gettodos', read)

route.post('/add', create)

route.put('/update/:id/', update)

route.delete('/del/:id/', del)

route.get('/get/:id', getTodo)

module.exports = route