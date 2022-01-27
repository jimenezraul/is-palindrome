// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

function isPalindrome(str) {
    var reversed = str.split('').reverse().join('');
    return str === reversed;
}
