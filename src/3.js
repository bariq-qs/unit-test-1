function isPalindrome(str) {
    // Remove spaces and convert all characters to lowercase to avoid case discrepancies
    str = str.replace(/\s/g, '').toLowerCase();

    // Compare the original string with the reversed string
    return str === str.split('').reverse().join('');
}

module.exports = isPalindrome