const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    passwordHash: String
});

const User = mongoose.model('User', userSchema);