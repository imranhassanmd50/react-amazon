const fs = require('fs');
const data = JSON.parse(fs.readFileSync('../product.json'))
const userData = data.user

exports.createUser = (req,res) =>{
    console.log(req.body);
    userData.push(req.body)
    res.json(req.body)
}

exports.getAllUser = (req,res) =>{
    res.json(userData)
}

exports.getUser = (req,res) =>{
    const paramsId = +req.params.id
    const findUser = userData.find(p=>p.id === paramsId)
     res.json(findUser)
}

exports.replaceUser = (req,res) =>{
    const paramsId = +req.params.id
    const UserIndex = userData.findIndex(p=>p.id === paramsId)
    userData.splice(UserIndex,1,{...req.body, id:paramsId})
     res.status(301).json()
}

exports.updateUser = (req,res) =>{
    const paramsId = +req.params.id
    const UserIndex = userData.findIndex(p=>p.id === paramsId)
    const User = userData[UserIndex]
    userData.splice(UserIndex,1,{ ...User,...req.body})
     res.status(201).json()
}

exports.removeUser = (req,res) =>{
    const paramsId = +req.params.id
    const UserIndex = userData.findIndex(p=>p.id === paramsId)
    const deletedUser = userData[UserIndex]
    userData.splice(UserIndex,1)
     res.status(301).json(deletedUser)
}