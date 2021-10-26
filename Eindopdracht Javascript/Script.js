const imgBtn = document.querySelector('img');
const orangeBackground = document.querySelector('li.menu-orange');
const redBackground = document.querySelector('li.menu-red');
const blueBackground = document.querySelector('li.menu-blue');
const purpleBackground = document.querySelector('li.menu-purple');
const getBody = document.querySelector('body');
const colorList = document.querySelector('ul');
const removeColor = getBody.classList.remove('menu-orange', 'menu-red', 'menu-blue', 'menu-purple');

imgBtn.addEventListener('click', function (e) {
    colorList.classList.remove('ul');
    colorList.classList.toggle('ul-active');
});

orangeBackground.addEventListener('click', function (e) {
    removeColor;
    getBody.classList.add('menu-orange');
    colorList.classList.toggle('ul-active');
});

redBackground.addEventListener('click', function (e) {
    removeColor;
    getBody.classList.add('menu-red');
    colorList.classList.toggle('ul-active');
});
blueBackground.addEventListener('click', function (e) {
    removeColor;
    getBody.classList.add('menu-blue');
    colorList.classList.toggle('ul-active');
});
purpleBackground.addEventListener('click', function (e) {
    removeColor;
    getBody.classList.add('menu-purple');
    colorList.classList.toggle('ul-active');
});
