require('dotenv').config()
const express=require('express')
const server=express()
const cors=require('cors')
const PORT= 4000 || process.env.PORT
server.use(cors())
server.use(express.json())

const category=require('./Routes/categoriesRouter')
// const product=require('./Routes/productRouter')
require('./db/connection')

server.use(category)
// server.use(product)

server.listen(PORT,()=>{
    console.log(`server started at PORT ${PORT}`)
})
server.get('/',(req,res)=>{
    res.send("<h2 style='text-align:center;color:green;'>server started successfully!</h2>")
})