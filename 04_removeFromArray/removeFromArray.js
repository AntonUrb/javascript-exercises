const removeFromArray = function(array, ...value) {
    for (let i = 0; i < value.length; i++) {
        let duplicate = value[i];
        // Continue removing the value while it exists in the array
        while (array.indexOf(duplicate) !== -1) {
            array.splice(array.indexOf(duplicate), 1);
        }
    }
    return array
    // // const duplicates = array.filter((item, index) => (array.indexOf(item) !== index))
    // // console.log("Duplicates:", duplicates)
    // for (let i = 0; i < value.length; i++) {
    //     const unwantedValue = array.splice(array.indexOf(value[i]), 1)
    // }
    // console.log("Final array:", array)
    // return array
};



// Do not edit below this line
module.exports = removeFromArray;
