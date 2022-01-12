module.exports = function toReadable (number) {
  let numbersTo20 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
  let decimal = ['zero', 'ten', 'twenty', 'trirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'hundred', 'thousand'];
  if (number <= 20) {
      return numbersTo20[number];
  } else if ((number < 100) && (number % 10 === 0)) {
      return decimal[number / 10];
  }  else if (number < 81) {
      return (decimal[Math.floor(number / 10)] + ' ' + numbersTo20[number % 10]);
  }
}
