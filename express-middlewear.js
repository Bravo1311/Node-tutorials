const express = require('express');
const app = express();
const path = require('path');
const { products } = require('./data.js')

const logger = require('./logger.js')
const authorize = require('./authorize')

//setup static and middleware
//files that are static thorughout the project can be placed in this folder
app.use(express.static('./public')) //public is a folder name

// app.use('/api',logger)
app.use([authorize, logger])  //order matters

app.get('/', (req,res)=>{ //logger is a function
    res.send('Home Page')
})

app.get('/about', (req,res)=>{

    res.send('About Page')
})

app.listen(5000, () => {
    console.log('server is listening on port 5000')
});