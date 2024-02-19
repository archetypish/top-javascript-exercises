const reverseString = function (string) {
  let reversedString = "";
  // loop over a string and get access to characters starting from behind
  for (let stringIndex = string.length - 1; stringIndex >= 0; stringIndex--) {
    reversedString = reversedString.concat(string.at(stringIndex));
  }
  return reversedString;

  // concat from last character to the first into a new string
};

// Do not edit below this line
module.exports = reverseString;
