const substitutionModule = (function () {
  const normalAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  // helper function: converts characters from one alphabet to the other when encoding or decoding
  function alphabetConversion(originalAlphabet, convertAlphabet, currentCharacter) {
  // maintains spacing by returning a space if included in input
    if (currentCharacter === ' ') return currentCharacter;
    let match = originalAlphabet.find((letter) => letter === currentCharacter);
    let matchPosition = originalAlphabet.indexOf(match);
    return convertAlphabet[matchPosition];
  }
  function substitution(input, alphabet, encode = true) {
    let result = '';
    // returns false if the substitution alphabet is missing
    if (!alphabet) return false;
    const subAlphabet = alphabet.split('');
    // returns false if the substitution alphabet has repeated characters, or less than or greater than 26 characters
    if ( subAlphabet.some((subLetter, index, array) => array.lastIndexOf(subLetter) != index) || subAlphabet.length !== 26 ) return false;
    const inputCharacters = input.toLowerCase().split('');
    inputCharacters.forEach((inputChar) => {
      if (encode) {
        result += alphabetConversion(normalAlphabet, subAlphabet, inputChar);
      } else {
        result += alphabetConversion(subAlphabet, normalAlphabet, inputChar);
      }
    })
    return result;
  }
  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
