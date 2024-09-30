// Miles per gallon to kilometers per liter
function converter(mpg) {
  let result = Number((1.609344 / 4.54609188 * mpg).toFixed(2));
  return result;
}

console.log(converter(10));
