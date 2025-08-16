const fs = require('fs');
const index = fs.readFileSync('index.html', 'utf-8')
const data = JSON.parse(fs.readFileSync('data.json'))
const model = require('../model/product');
const { default: mongoose } = require('mongoose');
const Product = model.Product
// const product = JSON.parse(fs.readFileSync('product.json'))
// const productsData = product.products

exports.createProduct = (req,res) =>{
    const product =  Product.insertMany(req.body);
    console.log(req.body);
    product.save()
    res.json(req.body)
}

exports.getAllProduct = async(req,res) =>{
    const products = await Product.find()
    res.json(products)
}

exports.getProduct = async (req,res) =>{
    const paramsId = req.params.id
    // const findProduct = productsData.find(p=>p.id === paramsId)
    const findProduct = await Product.findById(paramsId)

     res.json(findProduct)
}

exports.replaceProduct = async(req,res) =>{
    const paramsId = req.params.id
    // const productIndex = productsData.findIndex(p=>p.id === paramsId)
    // productsData.splice(productIndex,1,{...req.body, id:paramsId})
    const result = await Product.findOneAndReplace({_id:paramsId}, req.body)
    console.log(result);
     res.status(301).json(result)
}

exports.updateProduct = async(req,res) =>{
    const paramsId = req.params.id
    // const productIndex = productsData.findIndex(p=>p.id === paramsId)
    // const product = productsData[productIndex]
    // productsData.splice(productIndex,1,{ ...product,...req.body})
    const result = await Product.findOneAndUpdate({_id:paramsId}, req.body, {new:true})
     res.status(201).json(result)
}

exports.removeProduct = async(req,res) =>{
    const paramsId = req.params.id
    // const productIndex = productsData.findIndex(p=>p.id === paramsId)
    // const deletedProduct = productsData[productIndex]
    // productsData.splice(productIndex,1)
    const result = await Product.findOneAndDelete({_id:paramsId}, {new:true})
     res.status(301).json(result)
}