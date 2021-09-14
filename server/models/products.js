var mongoose = require('mongoose');

var productsSchema = mongoose.Schema({
    Name: String,
    Price: Number,
    Quantity: Number,
    Image: String,
    createdAt: { type: Date, default: Date.now }
}, { versionKey: false });

module.exports = mongoose.model
    ('Products', productsSchema);