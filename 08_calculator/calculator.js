const add = function (a, b) {
  return a + b
};

const subtract = function (a, b) {
  return a - b
};

const sum = function (arr) {
  return arr.reduce((sum, num) => sum += num, 0)
};

const multiply = function (arr) {
  return arr.reduce((sum, num) => sum *= num)
};

const power = function (num, power) {
  let result = 1

  for (let i = 1; i <= power; i++) {
    result *= num
  }
  return result
};

const factorial = function (num) {
  let result = 1

  for (let i = 1; i <= num; i++) {
    result *= i
  }
  return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
