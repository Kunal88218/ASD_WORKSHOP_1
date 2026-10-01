const database = require('../database/productDatabase');

async function getProducts() {
    const products = await database.readData();

    return products;
}

async function getProductById(id) {
    const products = await database.readData();

    return products.find((item) => item.id === id);
}

module.exports = {
    getProducts,
    getProductById
};