const add = require('../src/index.js');
const arithmatic = require('../src/subtract.js');
const assert = require('assert').strict;

// describe("integration test", function() {
//     it("one plus two equal three", function() {
//         assert.equal(add(1, 2), 3);
//     });
//     it("two plus two equal four", function() {
//         assert.equal(add(2, 2,), 4);
//     });
// });

//using arrow function

describe('integration test', () => {
    it('two plus three equal five', ()=> { 
        assert.equal(add(2, 3), 5);
    });
});

describe('Unit test', ()=> {
    it('fourteen minus ten equals four', ()=> {
        assert.equal(arithmatic(14, 10), 4)
    })
})