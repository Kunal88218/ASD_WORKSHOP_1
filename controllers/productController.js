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
    getProductById
};