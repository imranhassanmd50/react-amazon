
const express = require('express');
const userController = require('../controller/user');
const router = express.Router();


// MVC model-view-controller
router
.post('/',userController.createUser)
.get('/', userController.getAllUser)
.get('/:id', userController.getUser)
.put('/:id', userController.replaceUser)
.patch('/:id', userController.updateUser)
.delete('/:id', userController.removeUser)

exports.router = router;