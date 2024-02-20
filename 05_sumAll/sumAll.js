const sumAll = function (startNumber, endNumber) {
  // check if these are positive numbers
  if (
    typeof startNumber === "number" &&
    typeof endNumber === "number" &&
    startNumber >= 0 &&
    endNumber >= 0
  ) {
    let sum = 0;
    const smallerNumber = Math.min(startNumber, endNumber);
    const largerNumber = Math.max(startNumber, endNumber);

    for (let i = smallerNumber; i <= largerNumber; i++) {
      sum += i;
    }
    return sum;
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = sumAll;
