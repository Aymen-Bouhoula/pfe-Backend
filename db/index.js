const mongoose = require('mongoose')

async function connectToDB() {
    try {
        await mongoose.connect(process.env.URL)
        console.log('Sucsessfully Connected to Mongodb ...'.green.bold);
        
    } catch (error) {
        console.log('We could not connect to MongoDB ...'.red.bold,error);
        
    }
}


module.exports = connectToDB