const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    title: { 
        type: String,
        minlength: [6, 'El minimo es de 6 caracteres']
    },
    price: {
        type: Number
    },
    description: { 
        type: String,
        minlength: [6, 'El minimo es de 6 caracteres'] 
    }
    
}, { timestamps: true });
module.exports.Product = mongoose.model('Product', ProductSchema);
