//hey kiddo
const aging = function(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    };
};

const trueAge = function (age2) {
    const trueorfalse = aging(age2);
    if (trueorfalse == true) {
        return console.log('hello there')
    } else {
        return console.log('hello kiddo')
    };
};

trueAge(18);

//VAT Calculations exercise 1

const ResultVATCalculation = function (price, VAT) {
    DoVATCalculation(price, VAT);
};

const DoVATCalculation = function (price, VAT) {
    const ResultVATCalculation = price - (price / VAT);
    console.log(ResultVATCalculation.toFixed(2));
};

ResultVATCalculation(2.61, 1.19);

//VAT Calculations exercise 2
const ResultBasePriceCalculation = function (price2, VAT2) {
    DoBasePriceCalculation(price2, VAT2);
};

const DoBasePriceCalculation = function (price2, VAT2) {
    const ResultBasePriceCalculation = price2 / VAT2;
    console.log(ResultBasePriceCalculation.toFixed(2));
};

ResultBasePriceCalculation(2.61, 1.19);
