//No Arguments in function
//const paintwalls = function () {
//    console.log('the wall has been painted red');
//};

// paintwalls();

//single Argument assignement
//const paintwalls = function (colour) {
//console.log('the wall has been painted ' + colour);
//};

// const paintcolour = 'blue';
// paintwalls(paintcolour);


const paintwalls = function (wallside, colour) {
    console.log(wallside + ' has been painted ' + colour);
};

const paintcolour = 'blue';
const wallside = 'the right wall'
paintwalls(wallside, paintcolour);
