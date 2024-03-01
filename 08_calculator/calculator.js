const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((sum, item) => {
    sum += item;
    return sum;
  }, 0);
};

const multiply = function (arr) {
  return arr.reduce((agg, item) => {
    agg *= item;
    return agg;
  }, 1);
};

const power = function (a, b) {
  let result = 1;
  for (let i = 0; i < b; i++) {
    result = result * a;
  }
  return result;
};

const factorial = function (n) {
  if (n === 0) {
    return 1;
  } else if (n < 0) {
    return "invalid";
  }
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
