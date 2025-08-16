
const express = require('express');
const productController = require('../controller/product.js');
const router = express.Router();


// MVC model-view-controller
router
.post('/',productController.createProduct)
.get('/', productController.getAllProduct)
.get('/:id', productController.getProduct)
.put('/:id', productController.replaceProduct)
.patch('/:id', productController.updateProduct)
.delete('/:id', productController.removeProduct)

exports.router = router;