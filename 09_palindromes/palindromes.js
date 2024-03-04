const palindromes = function (str) {
  // get original string
  // str = "race car!";
  // remove all the spaces and punctuations and lowercase it
  let filters = [" ", ",", ".", "?", "!"];
  let cleanStr = "";
  for (char of str) {
    if (filters.includes(char)) continue;
    cleanStr += char.toLowerCase();
  }
  // store this new updated string

  // reverse this updated string
  let reversedStr = "";
  for (let i = cleanStr.length - 1; i >= 0; i--) {
    reversedStr = reversedStr.concat(cleanStr.at(i));
  }

  return reversedStr === cleanStr;
};

// Do not edit below this line
module.exports = palindromes;
