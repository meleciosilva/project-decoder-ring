const substitution = require('../src/substitution');
const expect = require('chai').expect;

describe('substitutionModule: substitution', () => {
    it('should return a string if given a valid string input', () => {
        const actual = substitution('thinkful', 'qwertyuiopasdfghjklzxcvbnm');
        expect(actual).to.be.a('string');     
    });
    it('should return false if all charcters in substitution alphabet are not unique', () => {
        const actual = substitution('thinkful', 'nrTcx0Fp6ohUAX1UtxO7106hF7');
        expect(actual).to.equal(false);
    });
    it('should return false if the substitution alphabet does not include exactly 26 characters', () => {
        const actual = substitution('thinkful', 'lf73a0z6');
        expect(actual).to.equal(false);
    });
    it('should correctly encode input given a valid substitution alphabet and ignore capital letters', () => {
        const actual = substitution('tHiNkFuL', 'qwertyuiopasdfghjklzxcvbnm');
        const expected = 'ziofayxs';
        expect(actual).to.equal(expected);
    });
    it('should correctly decode input given a valid substitution alphabet', () => {
        const actual = substitution('zIoFaYxS', 'qwertyuiopasdfghjklzxcvbnm', false);
        const expected = 'thinkful';
        expect(actual).to.equal(expected);
    });
    it('should maintain spaces when encoding', () => {
        const actual = substitution('i am a student', 'zyx$vutsrqpo&mlkjih#fedcba');
        const expected = 'r z& z h#f$vm#';
        expect(actual).to.equal(expected);
    });
    it('should maintain spaces when decoding', () => {
        const actual = substitution('r z& z h#f$vm#', 'zyx$vutsrqpo&mlkjih#fedcba', false);
        const expected = 'i am a student';
        expect(actual).to.equal(expected);
    });
});