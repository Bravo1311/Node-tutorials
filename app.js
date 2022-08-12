const express = require('express');
const app = express();
const path = require('path');

const people = require('./routes/people')

app.use(express.static('./methods-public'))

//parse form data
app.use(express.urlencoded({extended: false}))

//parse json
app.use(express.json())

app.use('/api/people', people)

app.post('/login', (req,res)=>{
    // console.log(req.body);
    const {name} = req.body;
    if(name){
        return res.status(200).send(`Welcome to the Party ${name}`)
    }
    res.status(401).send('Please Provide Credentials ')
})



app.listen(5000, () => {
    console.log('server is listening on port 5000')
});