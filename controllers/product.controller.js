
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