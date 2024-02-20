const leapYears = function (year) {
  // write a function that checks if a year is a leap year
  // leap years: years div by 4 perfectly
  // exclude year divisible by 100 by include years div by 400
  // div by 4 - div by 100 + div by 400
  const yearDivBy400 = year % 400 === 0;
  const yearDivBy4 = year % 4 === 0;
  const yearDivBy100 = year % 100 === 0;
  if ((yearDivBy400 && yearDivBy100) || (yearDivBy4 && !yearDivBy100)) {
    return true;
  }
  return false;
};

// Do not edit below this line
module.exports = leapYears;
