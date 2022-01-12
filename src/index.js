module.exports = function toReadable (number) {
  let numbersTo20 = ['zero', 'one', 'two', 'three', 'four', 'five, 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fivteen', 'sixteen', 'seventeen', 'eightteen', 'nineteen', 'twelve'];
  let decimal = ['zero', 'ten', 'twenty', 'trirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'hundred', 'thousand'];        
  if (number <= 20) {
      return numbersTo20[number];
}
