const imgBtn = document.querySelector('img');
const colorList = document.querySelector('li');
const orangeBackground = document.querySelector('li.menu-orange');
const redBackground = document.querySelector('li.menu-red');
const blueBackground = document.querySelector('li.menu-blue');
const purpleBackground = document.querySelector('li.menu-purple');
const getBody = document.querySelector('body');

imgBtn.addEventListener('click', function (e) {
    const colorList = document.querySelector('ul');
    colorList.classList.remove('ul');
    colorList.classList.toggle('ul-active');
});

orangeBackground.addEventListener('click', function (e) {
    getBody.classList.toggle('menu-orange');
});

redBackground.addEventListener('click', function (e) {
    getBody.classList.toggle('menu-red')
});
blueBackground.addEventListener('click', function (e) {
    getBody.classList.toggle('menu-blue')
});
purpleBackground.addEventListener('click', function (e) {
    getBody.classList.toggle('menu-purple')
});
