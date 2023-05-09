const userSchema = require('../models/authModel')
var uniqid = require('uniqid');

const signUp = async (req, res) => {
    try {
        const user = new userSchema({
            f_N: req.body.firstName,
            l_N: req.body.lastName,
            email: req.body.email,
            id: uniqid(),
            password: req.body.password
        })
        const result = await user.save()
        console.log("result", result);
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