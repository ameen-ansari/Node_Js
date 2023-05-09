const express = require("express");
const bodyParser = require('body-parser')
const { dbConnector } = require('./src/config/configDb')
const crudTodo = require('./src/routes/todoCrud')
const authentication = require('./src/routes/authRoutes')
const app = express()

//Use External Lib. to Encrypt the data
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//port Number
const port = 800

app.get('/', (req, res) => {
    res.send('welcome');
})

//Manage Todo_CRUD_system
app.use('/app', crudTodo)

//Manage Authentication
app.use('/auth', authentication)


//Run The Server
app.listen(port, () => {
    console.log(`server running on port ${port} sucessfully...`);
    dbConnector()
})