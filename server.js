const express = require("express");
const bodyParser = require('body-parser')

const app = express()

//Use External Lib. to Encrypt the data
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//port Number
const port = 800

//Main Array
let data = []

//Use Post Request Method
app.get('/', (req, res) => {
    res.status(200).json(data);
})

//Use Params
app.get('/get/:id', (req, res) => {
    let paramData = []
    data.forEach((obj) => {
        if (obj.id === Number(req.params.id)) {
            paramData.push(obj)
        }
    })
    res.status(200).json(paramData);
})

//Use Query
app.get('/get', (req, res) => {
    let QData = []
    data.forEach((obj) => {
        if (obj.name === req.query.name) {
            QData.push(obj)
        }
    })
    res.status(200).json(QData);
})

//Use Post Request Method
app.post('/create', (req, res) => {
    data.push({
        ...req.body,
        id: data.length + 1
    })
    console.log(data);
    res.status(200).json(data);
})

//Update the Data
app.post('/update/:id/', (req, res) => {
    let updatedData = []
    data.forEach((obj) => {
        if (obj.id === Number(req.params.id)) {
            obj.name = req.query.name
        }
        updatedData.push(obj)
    })
    data = updatedData
    res.status(200).json(data)
})

//Delete the Data
app.post('/delete/:id/', (req, res) => {
    let updatedData = []
    data.forEach((obj) => {
        if (obj.id !== Number(req.params.id)) {
            updatedData.push(obj)
        } 
    })
    data = updatedData
    res.status(200).json(data)
})


//Run The Server
app.listen(port, () => {
    console.log(`server running on port ${port} sucessfully...`);
})