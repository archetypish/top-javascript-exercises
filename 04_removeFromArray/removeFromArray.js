const removeFromArray = function (array) {
  //loop over the arguments to find the values that are to be removed

  let itemsToRemove = [];
  for (let i = 1; i < arguments.length; i++) {
    itemsToRemove.push(arguments[i]);
  }

  // remove all instances of items from the array
  function checkItemToRemove(arrayItem) {
    for (itemToRemove of itemsToRemove) {
      if (arrayItem === itemToRemove) {
        return false;
      }
    }
    return true;
  }

  // loop over
  return array.filter(checkItemToRemove);
  // get the final array and return it
};

// Do not edit below this line
module.exports = removeFromArray;
