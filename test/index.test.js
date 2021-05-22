const hello = require('../src/index.js');
const arthmatic = require('../src/arithmatic.js');
const assert = require('assert').strict;


describe('First test', () => {
    it('hello universe', ()=> { 
        assert.equal(hello(), 'Hello, Universe!');
    });
});

describe('Arithmatic Operation', () => {
    it('7 plus 5 equals 12', () => {
        assert.equal(arthmatic.add(7, 5), 12);
    });
    it('9 minus 6 equals 3', () => {
        assert.equal(arthmatic.subtract(9, 6), 3);
    });
    it('11 minuns 9 equals 2', () => {
        assert.equal(arthmatic.subtract(9, 11), 2);
    });
    it('10 multiply 11 equals 110', () => {
        assert.equal(arthmatic.multiply(10, 11), 110);
    });
    it('25 divided by 5 equals 5', () => {
        assert.equal(arthmatic.division(25, 5), 5);
    });
    it('64 divided by 4 equals 16', () => {
        assert.equal(arthmatic.division(4, 64), 16);
    });
})