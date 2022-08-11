const http = require('http')
const {readFileSync} = require('fs')

//get all files

const homePage = readFileSync('./index.html')

const server = http.createServer((req,res)=>{
    const url = req.url
    console.log(req)
    console.log('user hit the server')
    if(url === '/'){ //home page
        res.writeHead(200,{'content-type':'text/html'}) //this is the mime type
        // res.write("<h1>Home Page</h1>")
        res.write(homePage)
        res.end()
    }
    else if(url =='/about'){ //about page
        res.writeHead(200,{'content-type':'text/html'}) //this is the mime type
        res.write("<h1>About Page</h1>")
        res.end()
    }
    else{ //error page 
        res.writeHead(404,{'content-type':'text/html'}) //this is the mime type
        res.write("<h1>Page Not Found</h1>")
        res.end()
    }
    
    // res.end("<h1>Home Page</h1>")
})

server.listen(5000)