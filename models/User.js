const mongoose = require('mongoose');
const shajs = require('sha.js');

const userSchema = new mongoose.Schema({
    username: String,
    passwordHash: String
});

userSchema.statics.hashPassword = function(password) {
    return shajs('sha256').update(password).digest('hex');
}

userSchema.statics.createUser = async function(userDetails) {
    return new Promise(async (resolve, reject) => {
        const username = userDetails.username;
        const password = userDetails.password;

        if ((username == undefined || !/\S/.test(username))
            || (password == undefined || !/\S/.test(password))) {
                reject(new Error("Specify both a username and password"));
                return;
            }

        const user = new this({
            username: userDetails.username || null,
            passwordHash: userDetails.password ? this.hashPassword(userDetails.password) : null
        });

        await user.save();
        resolve();
    });
}

module.exports = mongoose.model('User', userSchema);