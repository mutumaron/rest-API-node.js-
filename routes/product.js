const express = require('express');

const productControllers = require('../controllers/productController');

const router = express.Router();

router.get('/',productControllers.getProducts);

router.post('/',productControllers.createProduct);

module.exports = router;