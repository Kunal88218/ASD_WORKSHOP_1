const express = require('express');
const invalidateCache = require('../middleware/invalidateCache');
const router = express.Router();

const productController = require('../controllers/productController');
const cacheMiddleware = require('../middleware/cacheMiddleware');

router.get(
    '/products',
    cacheMiddleware,
    productController.getProducts
);

router.get(
    '/products/:id',
    cacheMiddleware,
    productController.getProductById
);

router.post(
    '/products',
    invalidateCache,
    productController.createProduct
);

router.put(
    '/products/:id',
    invalidateCache,
    productController.updateProduct
);

router.patch(
    '/products/:id',
    invalidateCache,
    productController.updateProduct
);

router.delete(
    '/products/:id',
    invalidateCache,
    productController.deleteProduct
);
module.exports = router;