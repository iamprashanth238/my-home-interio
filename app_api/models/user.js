// Schema for user authentication
const mongoose = require('mongoose');
const Schena = mongoose.Schema;

const userSchema = new Schena({
    name: { type: String, required: true },
    email: { type: String, required: true},
    number: { type: Number, required: true }
});

const User = mongoose.model('User', userSchema);

module.exports = User;