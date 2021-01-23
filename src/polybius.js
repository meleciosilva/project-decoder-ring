const polybiusModule = (function () {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const numbers = ['11','21','31','41','51','12','22','32','42','42','52','13','23','33','43','53','14','24','34','44','54','15','25','35','45','55'];
  // helper function: identifies which character in "endCharacters" corresponds to input character in "startCharacters" and returns it
  function characterConversion(startCharacters, endCharacters, currentCharacter) {
    if (!startCharacters.includes(currentCharacter)) return currentCharacter;
    if ( currentCharacter === 'i' || currentCharacter === 'j' ) return '42';
    if (currentCharacter === '42') return '(i/j)';
    const match = startCharacters.find((char) => char === currentCharacter);
    const matchConvert = endCharacters.find((char) => startCharacters.indexOf(match) === endCharacters.indexOf(char));
    return matchConvert;
  }
  function polybius(input, encode = true) {
    let result = '';
    if (!encode && input.replace(/\s+/g, '').length % 2 !== 0) return false;
    let inputCharacters;
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
      // when encoding, splits input of text into single character items
      inputCharacters = input.toLowerCase().split('');
    }
    // iterates through each input character and finds the character match to convert to
    inputCharacters.forEach((inputChar) => {
      if (encode) {
        result += characterConversion(alphabet, numbers, inputChar);
      } else {
        result += characterConversion(numbers, alphabet, inputChar);
      } 
    });
    return result;
  }
  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;