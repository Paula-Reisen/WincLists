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

const myColors = {
    colorWall: "blue",
    colorFruit: "orange",
    colorCar: "red",
    colorHair: "white",
    colorGras: "green",
};

for (x in myColors) {
    console.log(myColors[x]);
}

// Ja, je bent nu aan het itereren. Echter ben je aan het itereren over een OBJECT.
// Array Methods zijn NIET beschikbaar op een object.