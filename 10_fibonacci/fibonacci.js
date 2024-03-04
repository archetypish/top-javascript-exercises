const fibonacci = function (n) {
  // returns the nth member of the fibonacci sequence 1, 1, 2, 3, 5, 8, ...
  // such that nth member is sum of (n-1)th and (n-2)th member
  // n > 1
  // input: index position of fibonacci sequence
  // output: member of fibonacci
  // algo
  // run a loop n times (n is always gonna be >= 1)
  n = parseInt(n);
  if (n >= 0) {
    let fibonacciSeq = [];
    for (let i = 0; i <= n; i++) {
      if (i === 0) {
        fibonacciSeq.push(0);
        continue;
      } else if (i === 1 || i === 2) {
        fibonacciSeq.push(1);
        continue;
      }
      fibonacciSeq.push(fibonacciSeq[i - 1] + fibonacciSeq[i - 2]);
    }
    return fibonacciSeq[n];
  } else {
    return "OOPS";
  }
  // first two iterations add 1
  // subsequent iterations takes previous 2 values and add the sum to list
  // do this until you reach (n-1)th position and return value
};

// Do not edit below this line
module.exports = fibonacci;
