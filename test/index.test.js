const hello = require('../src/index.js');
const arithmatic = require('../src/subtract.js');
const assert = require('assert').strict;


describe('Unit test', () => {
    it('hello universe', ()=> { 
        assert.equal(hello(), 'Hello, Universe!');
    });
    it('fourteen minus ten equals four', ()=> {
        assert.equal(arithmatic(14, 10), 4)
    })
});