const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/markdown-test');

beforeEach((done) => {
    mongoose.connection.dropDatabase(done);
});

after((done) => {
    mongoose.disconnect(done); 
});