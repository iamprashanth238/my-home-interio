// Schema for user authentication
const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true},
    number: { type: Number, required: true }
});

const User = mongoose.model('User', userSchema);

module.exports = User;