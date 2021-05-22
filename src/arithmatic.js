const add = (num1, num2) => num1 + num2;

const subtract = (num1, num2) => (
    num1 > num2 ? (num1-num2): (num2-num1)
);

const multiply = (num1, num2) => num1 * num2; 

const division = (num1, num2) => (
    num1 > num2 ? (num1/num2) : (num2/num1)
);

module.exports = {
    add,
    subtract,
    multiply,
    division
}