const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time)
    // res.send('testing')
    next();

    //if you dont want res.send inside the logger function, 
    //use next()
    //it will return to app.get
}

module.exports = logger