const age = 18;
const isFemale = true;
const driverStatus = 'job';
const firstName = 'Sarah';
const totalAmount = 100;

if (age >= 18 && age <= 25) {
    console.log("You get 50% discount");
} else {
    console.log("You won't get the discount");
}

if (isFemale) {
    console.log("Your allowed to enter ladiesnight.");
} else {
    console.log("You are not a female so you can't enter ladiesnight.");
}

if (driverStatus == 'bob') {
    console.log("You are allowed to drive home.");
} else {
    console.log("You are not the bob so you are not allowed to drive home.");
}

// Checking if the name is correct (Sarah or Bram)

if (firstName === 'Sarah' || firstName === 'Bram') {
    console.log('You get a free beer');
} else {
    console.log('You will not get a free beer');
}

//Checking amount 25, 50 or 100 for a free gift.
if (totalAmount === 25) {
    console.log('you will get a plate of bitterballen');
} else if (totalAmount === 50) {
    console.log('You will get a portion of nachos');
} else if (totalAmount === 100) {
    console.log('You will get a free bottle of champagne');
}