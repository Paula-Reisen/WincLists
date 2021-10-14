var Name = prompt('Welkom! Wat is je naam?');
var welkomName = prompt('Hey' + Name);
var min = parseInt(prompt('Voer het laagste nummer in om je range te bepalen.'));
var max = parseInt(prompt('Voer het hoogste nummer in om je range te bepalen.'));
var InputNumber = parseInt(prompt('Wat is je gok?'));

var GuessTheNumber = function (InputNumber) {
    for (var i = 1; i < 5; i++) {
        var CorrectGuess = GetRandomInteger(min, max);
        if (InputNumber == CorrectGuess) {
            alert('Gefeliciteerd je hebt gewonnen');
        } else {
            alert('Dat is niet correct. Graag opnieuw proberen.');
            InputNumber = (parseInt(prompt('Wat is je nieuwe gok?')));
        }
    }
    alert('Dag' + Name + 'tot de volgende keer!');
}


// bonus
var GetRandomInteger = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
};



