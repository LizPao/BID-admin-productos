
const { Product } = require("../models/product.model");

module.exports.index = (request, response) => {
    response.json({
    message: 'Hello World',
    })
}

module.exports.createProduct = async (request, response) => {

    try {
        const { title, price, description } = request.body;
        producto = await Product.create({
            title,
            price,
            description
    });
    response.json(producto);

    } catch (error) {
        response.status(400);
        response.json(error);
    }
}

module.exports.getAllProduct = async (request, response) => {
    try {
        const products = await Product.find({})
        response.json(products)
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}

module.exports.getProduct = async (request, response) => {
    try {
        const product = await Product.findOne({_id:request.params.id})
        response.json(product)
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}
