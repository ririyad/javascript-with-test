const hello = require('../src/index.js');
const arthmatic = require('../src/arithmatic.js');
const assert = require('assert').strict;


describe('First test', () => {
    it('hello universe', ()=> { 
        assert.equal(hello(), 'Hello, Universe!');
    });
});

describe('Arithmatic Operation', () => {
    it('seven plus five equals twelve', () => {
        assert.equal(arthmatic.add(7, 5), 12);
    });
    it('nine minus six equals three', () => {
        assert.equal(arthmatic.subtract(9, 6), 3);
    });
    it('eleven minuns nine equals two', () => {
        assert.equal(arthmatic.subtract(9, 11), 2);
    });
    it('ten multiply eleven equals One hundred and ten', () => {
        assert.equal(arthmatic.multiply(10, 11), 110);
    });
})