const fibonacci = function(num) {
    
    const int = parseInt(num)

    if (int === 0) {
        return 0
    } else if (int < 0) {
        return "OOPS"
    }

    let fiboArray = [0, 1]

    for (let i = 2; i <= int; i++) {
        fiboArray[i] = fiboArray[i - 1] + fiboArray[i - 2]
        fiboArray.push()
    }
    return fiboArray[fiboArray.length - 1]
};

// Do not edit below this line
module.exports = fibonacci;
