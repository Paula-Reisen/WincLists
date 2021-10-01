// Function that does something
const CheckBigNumber = function (number) {
    if (number > 100) {
        return true;
    }

    else if (number <= 100) {
        return false;
    }
};

const numberfunction = 50;
console.log(CheckBigNumber(numberfunction));

//Bouncer at the club : Do and produce something
const enterClub = function (maxPeople, currentNumber, ageCustomer) {
    if (currentNumber > maxPeople) {
        return console.log('its too busy now, come back later');
    }
    else if (ageCustomer < 18) {
        return console.log('this is a club for adults');
    }
    else {
        return console.log('Come in!');
    }  
};

const maxPeople = 150;
const currentNumber = 100;
const ageCustomer = 19;

enterClub(maxPeople, currentNumber, ageCustomer);

// Calculating the average

const calculateAverage = function (firstNumber, SecondNumber, thirdNumber, fourthNumber, fifthNumber) {

    const total = firstNumber + SecondNumber + thirdNumber + fourthNumber + fifthNumber;
    const average = total / 5;
    return average;
};

const firstNumber = 300;
const SecondNumber = 2;
const thirdNumber = 30;
const fourthNumber = 250;
const fifthNumber = 1000;
console.log(calculateAverage(firstNumber, SecondNumber, thirdNumber, fourthNumber, fifthNumber));
