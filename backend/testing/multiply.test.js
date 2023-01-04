const multiply = require('./multiply');

describe('multiply', () => {
    it('multiplies 2 by 4', () => {
        expect(multiply(2 * 4)).toBe(8)
    });
});