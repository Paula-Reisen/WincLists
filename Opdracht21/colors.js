var colorArray = ['yellow', 'blue', 'red', 'orange'];

// while (colorArray[i]) {
//     console.log(colorArray[i]);
//     i++;
// }

for (var i = 0; i < colorArray.length; i++){
    console.log(colorArray[i]);
}

colorArray.forEach(element => console.log(element));

for (const [key, value] of Object.entries(colorArray)) {
    console.log(`${key}: ${value}`);
}