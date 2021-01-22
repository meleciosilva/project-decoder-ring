const polybiusModule = (function () {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const numbers = ['11','21','31','41','51','12','22','32','42','42','52','13','23','33','43','53','14','24','34','44','54','15','25','35','45','55'];

  function polybius(input, encode = true) {
    let result = '';
    if (!encode && input.length % 2 !== 0) return false;
    if (encode) {
      const inputCharacters = input.toLowerCase().split('');
      inputCharacters.forEach((inputChar) => {
        const match = alphabet.find((letter) => letter === inputChar);
        const numMatch = numbers.find((number) => alphabet.indexOf(match) === numbers.indexOf(number));
        // inserts spaces and non-alphabetic symbols if included in input
        if (!alphabet.includes(inputChar)) {
          result += inputChar;
        } else if (inputChar === 'i' || inputChar === 'j') {
          result += '42';
        } else {
          result += numMatch;
        }  
      });
    // conditional to execute if called to decode
    } else { 
        // when decoding, converts input into an array of 2-digit values/strings
        const inputNumbers = [];
        for (let i = 0; i < input.length-1; i+=2) {  
          if (input[i] === ' ') {
            inputNumbers.push(input[i]);
            i--; // adjusts for loop so nect character in input is checked for a number
          } else {
          inputNumbers.push(input[i] + input[i + 1]);
          }
        }
        // matches each inputNumber to its corresponding letter
        inputNumbers.forEach((inputNum) => {
          const match = numbers.find((number) => number === inputNum);
          const charMatch = alphabet.find((letter) => numbers.indexOf(match) === alphabet.indexOf(letter));
        // inserts a space if included in the input
          if (!numbers.includes(inputNum)) {
            result += inputNum;
          } else if (inputNum === '42') {
            result += '(i/j)';
          } else {
            result += charMatch;
          }
        });
      }
    return result;
  }
  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
