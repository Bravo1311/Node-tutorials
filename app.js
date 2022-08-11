const express = require('express');
const app = express();
const path = require('path');
const { products } = require('./data.js')

//setup static and middleware
//files that are static thorughout the project can be placed in this folder
app.use(express.static('./public')) //public is a folder name

app.get('/', (req, res) => {
    console.log('user hit the resource')
    // res.status(200).send('Home Page')
    // res.sendFile(path.resolve(__dirname,'./index.html'))
    // res.json([{'name':'Kartik'},{'name':'Agrawal'}])
    res.send('<h1>Home Page</h1><a  href = "api/products">Products</a>')
})

// app.get('/api/products',(req,res)=>{
//     const newProducts = products.map((product)=>{
//         const {id,name,image} = product;
//         return{id,name,image}
//     })
//     res.json(newProducts);
// })

//route parameters

app.get('/api/products/:productId', (req, res) => {
    console.log(req)
    console.log(req.params)
    const { productId } = req.params;
    const singleProduct = products.find((product) =>  product.id === Number(req.params.productId) )
    //remember not to put curly braces inside find function's callback
    if(!singleProduct){
        return res.status(404).send('Product Does Not Exist')
    }
    res.json(singleProduct);
})

app.get('/about', (req, res) => {
    res.status(200).send('About Page')
})

app.all('*', (req, res) => {
    res.status(404).send('<h1>resource not found.</h1>')
})

app.listen(5000, () => {
    console.log('server is listening on port 5000')
});