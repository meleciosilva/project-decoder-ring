const polybius = require('../src/polybius');
const expect = require('chai').expect;

describe('polybiusModule: polybius', () => {
    it('should return a string if given a valid string input', () => {
        const actual = polybius('thinkful');
        expect(actual).to.be.a('string');     
    });
    it('should correctly encode the input and ignore capital letters', () => {
        const actual = polybius('aPpLe');
        const expected = '1153531351';
        expect(actual).to.equal(expected);
    });
    it('should maintain spaces throughout when encoding', () => {
        const actual = polybius('apple seeds');
        const expected = '1153531351 3451514134';
        expect(actual).to.equal(expected);
    });
    it('should maintain spaces throughout when decoding', () => {
        const actual = polybius('1153531351 3451514134', false);
        const expected = 'apple seeds';
        expect(actual).to.equal(expected);
    });
    it('should return false when decoding if the input amounts to an odd total number of characters', () => {
        const actual = polybius('123456789 1234', false);
        expect(actual).to.equal(false);
    });
    it('should correctly decode the input with the corresponding string values', () => {
        const actual = polybius('1454113152', false);
        const expected = 'quack';
        expect(actual).to.equal(expected);
    });
    it('should return "(i/j)" when decoding "42" from the input', () => {
        const actual = polybius('4432423352125413 4234 2224511144', false);
        const expected = 'th(i/j)nkful (i/j)s great';
        expect(actual).to.equal(expected);
    });
    it('should return "42" when encoding "i" or "j" from the input', () => {
        const actual = polybius('john is jolly');
        const expected = '42433233 4234 4243131345';
        expect(actual).to.equal(expected);
    });
})