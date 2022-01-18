module.exports = function toReadable (number) {
  let numbersTo20 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
  let decimal = ['zero', 'ten', 'twenty', 'trirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'hundred', 'thousand'];
  if (number <= 20) {
        return numbersTo20[number];
  } else if ((number < 100) && (number % 10 == 0)) {
        return decimal[Math.floor(number / 10) + 1];
  }  else if (number < 100) {
        return (decimal[Math.floor(number / 10)] + ' ' + numbersTo20[number % 10]);
  } else if (number % 100 === 0){
        return `${numbersTo20[Math.floor(number / 100)]} hundred`;
  } else {
        return `${numbersTo20[Math.floor(number / 100)]} hundred ${toReadable (number % 100)}`;
  }
}
