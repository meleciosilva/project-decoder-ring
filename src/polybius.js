const polybiusModule = (function () {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const numbers = ['11','21','31','41','51','12','22','32','42','42','52','13','23','33','43','53','14','24','34','44','54','15','25','35','45','55'];

  function polybius(input, encode = true) {
    let result = '';
    if (!encode && input.length % 2 !== 0) return false;
    let inputCharacters; // will split input into multiple items in an array
    // when decoding, converts input into an array of 2-digit values/strings
    if (!encode) { 
      inputCharacters = [];
      for (let i = 0; i < input.length-1; i += 2) {  
        if (input[i] === ' ') {
          inputCharacters.push(input[i]);
          i--; // adjusts for loop so next character in input is checked for a number
        } else {
          inputCharacters.push(input[i] + input[i + 1]);
        }
      } 
    } else {
      // splits input of text into single character items
      inputCharacters = input.toLowerCase().split('');
    }
    // iterates through each input character, finds the matching character in alphabet/numbers, and finds the corresposing leter/number to convert to
    inputCharacters.forEach((inputChar) => {
      let match; // will identify if input matches 
      let matchConvert; // will identify appropriate number/letter corresponding to input character
      if (encode) {
        match = alphabet.find((letter) => letter === inputChar);
        matchConvert = numbers.find((number) => alphabet.indexOf(match) === numbers.indexOf(number));
      } else {
        match = numbers.find((number) => number === inputChar);
        matchConvert = alphabet.find((letter) => numbers.indexOf(match) === alphabet.indexOf(letter));
      }
      // inserts spaces and non-alphabetic symbols if included in input
      if ( encode && !alphabet.includes(inputChar) || !encode && !numbers.includes(inputChar) ) {
        result += inputChar;
      } else if ( inputChar === 'i' || inputChar === 'j' ) {
        result += '42';
      } else if (inputChar === '42') {
        result += '(i/j)';
      } else {
        result += matchConvert;
      }  
    });
    return result;
  }
  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;