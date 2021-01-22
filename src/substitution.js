const substitutionModule = (function () {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  function substitution(input, alphabet, encode = true) {
    let result = '';
    const subAlphabet = alphabet.split('');
    // returns false if the substitution alphabet has repeated characters or less than or greater than 26 characters
    if ( subAlphabet.some((subLetter, index, array) => array.lastIndexOf(subLetter) != index) || subAlphabet.length !== 26 ) return false;
    return result;
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
