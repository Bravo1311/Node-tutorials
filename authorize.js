const authorize = (req,res,next)=>{
    const {user} = req.query;
    if(user){
        req.user = {validated:true}
        next()
    }
    else{
        res.status(401).send('Unauthorized')
    }
}

module.exports= authorize