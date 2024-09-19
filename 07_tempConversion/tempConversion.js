const convertToCelsius = function(farenheit) {

let celciusConversion = ((farenheit -32)* (5/9));
if(!Number.isInteger(celciusConversion)){
return Number(celciusConversion.toFixed(1));}
else {return Number(celciusConversion)}


};

const convertToFahrenheit = function(celcius) {
let farenheitCOnversion = ((celcius* (9/5))+32);
if(!Number.isInteger(farenheitCOnversion)){
  return  Number(farenheitCOnversion.toFixed(1));}
  else {return Number(farenheitCOnversion)}


};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
