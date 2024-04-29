// Forma 1:

function multiplyByTwo(number) {
    function inner() {
        return number * 2;
    }
    return inner;
}

console.log(multiplyByTwo(4)());

// Forma 2
function multiplyByTwo(numbers) {
    let otherNumber=2;
    function innere() {
        return numbers * otherNumber;
    }
    return innere;
}

console.log(multiplyByTwo(4)());
