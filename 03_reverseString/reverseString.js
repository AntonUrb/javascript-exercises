const reverseString = function(string) {
    let reverseArray = ""
    for (let i = 0; i < string.length; i++) {
        reverseArray += string[(string.length - i - 1)]
    }
    return reverseArray
};

// Do not edit below this line
module.exports = reverseString;

// 