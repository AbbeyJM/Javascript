const fizzBuzz = require('./fizzbuzz')

describe('fizzBuzz', () => {
    it('returns fizz', () => {
        expect(fizzBuzz(3)).toBe('Fizz')
    })
    it('returns buzz', () => {
        expect(fizzBuzz(5)).toBe('Buzz')
    })
    it('returns fizzBuzz', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz')
    })
    it('returns number', () => {
        expect(fizzBuzz(8)).toBe(8)
    })
});