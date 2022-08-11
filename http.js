const http = require('http')

const server = http.createServer((req, res)=>{
    if(req.url==='/'){
        res.end('Welcomt to our Home Page')
    }
    if(req.url==='/about'){
        res.end('Welcomt to our History Page')
    }
    res.end(`<h1>Oops!</h1>`)
})


server.listen(5000)