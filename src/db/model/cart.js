const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const cartSchema = mongoose.Schema({
    products: [{
        _id: false,
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'products',
        },
        quantity: { type: Number, default: 1 }
    }]
});

module.exports = cartSchema