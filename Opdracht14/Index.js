let person = {
    name: 'paula',
    age: 18,
    evaluations: [7, 10, 9]
};

console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person['name']);
console.log(person['age']);
console.log(person.evaluations);

//deel 2 arrays
let colours = ['groen', 'blauw', 'rood'];
let lastColours = colours[colours.length - 1];

console.log(colours.length);
console.log(colours[0]);
console.log(lastColours);

colours[3] = 'geel';
console.log(colours.push);
console.log(colours);

colours.push(5);
console.log(colours);

let newObject = { greeting: "Hi ik ben een object" };

colours.push(newObject);
console.log(colours);

console.log(newObject.greeting);