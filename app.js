// Before Running Please Exectute the following command in the same directory if you are not downloading the other files other than app.js : npm i prompt-sync 

const prompt = require('prompt-sync')();

function isPalindrome(str) {
    function reverseString(str) {
    return str.split("").reverse().join("");
    
}
    return str === reverseString(str);
}

var userInput = prompt("Enter a String: ")
var userInput = userInput.toLowerCase()
if (isPalindrome(userInput) === true) {
    console.log(userInput + " " + "is a palindrome")
} else {
    console.log(userInput + " " + "isn't a palindrome")
}
