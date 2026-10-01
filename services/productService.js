const database = require('../database/productDatabase');

async function getProducts() {
    return await database.readData();
}

async function getProductById(id) {
    const products = await database.readData();

    return products.find((item) => item.id === id);
}

async function createProduct(product) {
    const products = await database.readData();

    products.push(product);

    await database.writeData(products);

    return product;
}

async function updateProduct(id, data) {
    const products = await database.readData();

    const index = products.findIndex((item) => item.id === id);

    if (index === -1) {
        return null;
    }

    products[index] = {
        ...products[index],
        ...data,
        id
    };

    await database.writeData(products);

    return products[index];
}

async function deleteProduct(id) {
    const products = await database.readData();

    const index = products.findIndex((item) => item.id === id);

    if (index === -1) {
        return null;
    }

    const deletedProduct = products[index];

    products.splice(index, 1);

    await database.writeData(products);

    return deletedProduct;
}

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};