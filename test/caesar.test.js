const {expect} = require('chai');
const caesar = require('../src/caesar');

describe('caesarModule: caesar', () => {
    it('should return a string if given both input and shift arguments and ignore capital letters', () => {
        const actual = caesar('ThInKfUl', 1);
        expect(actual).to.be.a('string');
    });
    it('should return false if "shift" is not presents, equal to 0, greater than 25, or less than -25', () => {
        const actual = caesar('thinkful', 34);
        expect(actual).to.equal(false);
    });
    it('should correctly encode an input and ignore spaces and/or non-alphabetic characters', () => {
        const actual = caesar('thinkful is great!', 3);
        const expected = 'wklqnixo lv juhdw!';
        expect(actual).to.equal(expected);
    });
    it('should correctly decode an input and ignore spaces and/or non-alphabetic characters', () => {
        const actual = caesar('wklqnixo lv juhdw!', 3, false);
        const expected = 'thinkful is great!';
        expect(actual).to.equal(expected);
    });    
    it('should correctly decode an input if given a negative shift value', () => {
        const actual = caesar('Rwtjsk sjw tdsuc sfv ozalw.', -8, false);
        const expected = 'zebras are black and white.';
        expect(actual).to.equal(expected);
    });
    it('should wrap to front of the alphabet if a letter exceeds end of alphabet', () => {
        const actual = caesar('Zoo Animals', 5);
        const expected = 'ett fsnrfqx';
        expect(actual).to.equal(expected);
    });
    it ('should wrap to end of the alphabet if a letter exceeds beginning of alphabet', () => {
        const actual = caesar('air, bear, care, & dare', -4);
        const expected = 'wen, xawn, ywna, & zwna';
        expect(actual).to.equal(expected);
    })
});