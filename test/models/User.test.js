const assert = require('chai').assert;
const userModel = require('../../models/User');

describe('User model', function() {
    it('should generate password hash', function() {
        const correctHash = '185f8db32271fe25f561a6fc938b2e264306ec304eda518007d1764826381969';
        assert.equal(userModel.hashPassword('Hello'), correctHash);
    });

    it('should create user', async function() {
        await userModel.createUser({
            username: 'John',
            password: '123'
        });

        const res = await userModel.find({ username: 'John' }).exec();
        assert.equal(res.length, 1);
    });

    it('should fail when no username is given', function() {
        return assert.isRejected(userModel.createUser({}));
    })

    it('should fail when empty username/password is given', function() {
        return assert.isRejected(userModel.createUser({ username: '   ', password: '    ' }));
    })
});