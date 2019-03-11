const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/email-test');

beforeEach((done) => {
    mongoose.connection.dropDatabase(done);
});

after((done) => {
    mongoose.disconnect(done); 
});