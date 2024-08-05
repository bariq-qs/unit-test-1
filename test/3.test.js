const isPalindrome = require('../src/3')

test('isPalindrome should return true for palindromes', () => {
    expect(isPalindrome('radar')).toBe(true);
    expect(isPalindrome('racecar')).toBe(true);
});

test('isPalindrome should return false for non-palindromes', () => {
    expect(isPalindrome('hello')).toBe(false);
    expect(isPalindrome('world')).toBe(false);
});