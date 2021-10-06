// Function declaration
function add(number1, number2) {
    number1 * 2;
    number2 * 2;

    return (number1 + number2) * 2;
}

// Function expression

const numbers = function addingnumbers(number1, number2) {
    number1 * 2;
    number2 * 2;

    return (number1 + number2) * 2;
};

// Function arrows

const numberArrows = (number1, number2) => {
    number1 * 2;
    number2 * 2;

    return (number1 + number2) * 2;
};

console.log(add(4, 5), numbers(4, 5), numberArrows(4, 5));