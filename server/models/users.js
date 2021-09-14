var mongoose = require('mongoose');

var usersSchema = mongoose.Schema({
    FullName: { type: String, required: true },
    Email: { type: String, required: true },
    Password: { type: String, required: true },
    UserRole: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
}, { versionKey: false });

module.exports = mongoose.model('Users', usersSchema);