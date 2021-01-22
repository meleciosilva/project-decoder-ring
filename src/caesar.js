const caesarModule = (function () {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  
  function caesar(input, shift, encode = true) {
    if (!shift || shift > 25 || shift < -25 || shift === 0) return false;
    let result = '';
    // converts shift value to opposite sign if input needs to be decoded
    if (!encode) {shift *= -1};
    for (let i = 0; i < input.length; i++) {
      const inputLetter = input[i].toLowerCase();
      const inputLetterPosition = alphabet.indexOf(inputLetter);
      let newPosition = inputLetterPosition + shift;
      // inserts spaces and non-alphabetic symbols if included in input
      if (!alphabet.includes(inputLetter)) {
        result += inputLetter;
      // 'wraps' to end of alphabet if newPosition exceeds beginning of alphabet
      } else if (newPosition < 0) {
        newPosition = (newPosition % 26) + 26;
        result += alphabet[newPosition];
      // 'wraps' to front of alphabet if newPosition exceeds end of alphabet
      } else {
        newPosition = newPosition % 26;
        result += alphabet[newPosition];
      }
    }
    return result;
  };
  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;