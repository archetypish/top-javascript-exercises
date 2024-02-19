const repeatString = function (string, num) {
  if (num >= 0) {
    let initialString = "";
    for (let i = 0; i < num; i++) {
      initialString += string;
    }
    return initialString;
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = repeatString;
