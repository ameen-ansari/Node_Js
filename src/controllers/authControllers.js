const userSchema = require('../models/authModel')
var uniqid = require('uniqid');

const signUp = async (req, res) => {
    const user = new userSchema({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        id: uniqid(),
        // password: req.body.password
    })
    try {
        await user.save()
        res.send({
            message: 'Success',
        })
    }
    catch (error) {
        res.send({
            message: 'something went wrong',
            error: error
        })
    }
}


const logIn = (req, res) => {
    res.send('login')

}

module.exports = {
    signUp,
    logIn
}