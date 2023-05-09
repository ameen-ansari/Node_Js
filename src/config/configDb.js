const mongoose = require('mongoose')

const dbConnector = async () => {
    try {
        await mongoose.connect('mongodb+srv://ameentech123:mongofirstpro@cluster0.atyz11l.mongodb.net/todoweb');
        console.log('dbConnected...');
    } catch (error) {
        console.log('while db_connection',error);
    }
}

module.exports = {
    dbConnector
}