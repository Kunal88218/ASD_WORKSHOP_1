const productService = require('../services/productService');

async function getProducts(req, res) {
    try {
        const products = await productService.getProducts();

        res.json(products);

    } catch (err) {
        console.log(err);

        res.status(500).json({
            error: 'Something went wrong'
        });
    }
}

async function getProductById(req, res) {
    try {
        let { id } = req.params;

        id = Number(id);

        const product = await productService.getProductById(id);

        if (!product) {
            return res.status(404).json({
                error: 'Product not found'
            });
        }

        res.json(product);

    } catch (err) {
        console.log(err);

        res.status(500).json({
            error: 'Something went wrong'
        });
    }
}

async function createProduct(req, res) {
    try {
        const product = await productService.createProduct(req.body);

        res.status(201).json(product);

    } catch (err) {
        console.log(err);

        res.status(500).json({
            error: 'Something went wrong'
        });
    }
}

async function updateProduct(req, res) {
    try {
        const id = Number(req.params.id);

        const product = await productService.updateProduct(
            id,
            req.body
        );

        if (!product) {
            return res.status(404).json({
                error: 'Product not found'
            });
        }

        res.json(product);

    } catch (err) {
        console.log(err);

        res.status(500).json({
            error: 'Something went wrong'
        });
    }
}

async function deleteProduct(req, res) {
    try {
        const id = Number(req.params.id);

        const product = await productService.deleteProduct(id);

        if (!product) {
            return res.status(404).json({
                error: 'Product not found'
            });
        }

        res.json(product);

    } catch (err) {
        console.log(err);

        res.status(500).json({
            error: 'Something went wrong'
        });
    }
}

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};