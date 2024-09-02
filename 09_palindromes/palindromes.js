const palindromes = function (str) {
    let alpha = "abcdefghijklmnopqrstuvwxyz0123456789"

    let array = str
        .toLowerCase()
        .split("")
        .filter(character => alpha.includes(character))

    return array.join("") === array.reverse().join("")
};

// Do not edit below this line
module.exports = palindromes;
