// import express from 'express'
// import fs from 'fs'

require('dotenv').config()
const express = require('express')
const server = express();
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose')

// getting-started.js

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
    console.log('database conncected');
}




const productRouter = require('./routes/product')
const userRouter = require('./routes/user')

console.log(process.env.DB_PASSWORD);
// body-parser
server.use(cors());
server.use(express.json())
server.use(express.static(path.resolve(__dirname,process.env.PUBLIC_DIR)))
server.use('/products', productRouter.router)
// server.use('/user', userRouter.router)


// server.use((req,res,next) =>{
//     console.log(req.method,req.ip,req.get('User-Agent'),req.hostname);
//     next()
// })

// const auth = (req,res,next) =>{
//     // console.log(req.query);
//     // if(req.query.password === '123'){
//     //     next()
//     // } else{
//     //     res.sendStatus(401)
//     // }
//     next()
// }
// server.use(auth)











// server.get('/', (req,res) =>{
//     // res.send('<h1>hello</h1>')
//     // res.sendFile('F:/node-coder-dost/index.html')
//     // res.json(JSON.parse(data))
//     res.sendStatus(200)
// })


server.listen(process.env.PORT, () =>{
    console.log('Server Started');
})

