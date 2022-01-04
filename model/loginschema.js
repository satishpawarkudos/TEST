var mongoose = require('mongoose');

var LoginSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

module.exports = mongoose.model('Signup', LoginSchema);
