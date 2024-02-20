const convertToCelsius = function (tempInFahrenheit) {
  const tempInCelsiusPrecise = ((tempInFahrenheit - 32) * 5) / 9;
  const tempInCelsiusRounded = Math.round(tempInCelsiusPrecise * 10) / 10;
  return tempInCelsiusRounded;
};

const convertToFahrenheit = function (tempInCelsius) {
  const tempInFahrenheitPrecise = (tempInCelsius * 9) / 5 + 32;
  const tempInFahrenheitRounded = Math.round(tempInFahrenheitPrecise * 10) / 10;
  return tempInFahrenheitRounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
