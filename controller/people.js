const { people } = require('../data.js')

const getpeople = (req,res)=>{
    res.status(200).json({success:true, data:people})
}

const postname = (req,res)=>{
    const {name} = req.body
    if(!name){
        return res.status(401).json({success:false, msg:'Please enter a name'})
    }
    res.status(201).send({success:true, person:name})
}

const postpostman = (req,res)=>{
    const {name} = req.body 
    if(!name){
        return res.status(400).json({success:false, msg:'Please enter a name'})
    }  
    res.status(201).send({success:true, data:[...people, name]})
}

const putname = (req,res)=>{
    const {id} = req.params
    const {name} = req.body
    
    const person = people.find((person)=>person.id===Number(id))
    if(!person){
        return res.status(400).json({success:false, msg:'Please enter a valid id'})
    }
    if(!name){
        return res.status(400).json({success:false, msg:'Please enter a valid name'})
    }
    person.name = name
    console.log(id) 
    console.log(person) 
    res.status(201).send({success:true, data:[...people]})
    
    // res.send('success')
}

module.exports = {getpeople, postname, postpostman, putname}