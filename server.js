const express = require("express");
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const port = 800
const data = []

app.get('/', (req, res) => {
    res.status(200).json(data);
})


app.get('/get/:id', (req, res) => {
    const paramData = []
    data.forEach((obj) => {
        if (obj.id === Number(req.params.id)) {
            paramData.push(obj)
        }
    })
    res.status(200).json(paramData);
})
app.get('/get', (req, res) => {
    const QData = []
    data.forEach((obj) => {
        if (obj.name === req.query.name) {
            QData.push(obj)
        }
    })
    res.status(200).json(QData);
})

app.post('/create', (req, res) => {
    data.push({
        ...req.body,
        id: data.length + 1
    })
    console.log(data);
    res.status(200).json(data);
})

app.listen(port, () => {
    console.log(`server running on port ${port} sucessfully...`);
})