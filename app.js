require('dotenv').config()
const express = require('express')
const connectToDB = require('./db/index')
const colors = require('colors')


const productRoute = require('./routes/productRoute')

connectToDB()

const app = express()
app.use(express.json())
app.use('/api/products',productRoute)

const port = process.env.PORT || 3000 

app.listen(port,() =>{
    console.log(
        `server is running on port ${port} in ${process.env.NODE_ENV} mode ...`.green.bold
    );
    
})