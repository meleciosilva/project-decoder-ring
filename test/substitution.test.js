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
});