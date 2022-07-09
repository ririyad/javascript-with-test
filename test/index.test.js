const hello = require('../src/index.js');
const assert = require('assert').strict;


describe('First test', () => {
    it('hello universe', ()=> { 
        assert.equal(hello(), 'Hello, Universe!');
    });
});
