const Btn = document.querySelector(".btn-alert");

Btn.addEventListener('click', function (e) {
    console.log(alert('button clicked'));
});

const btnBackground = document.querySelector(".blue-background");
// const changeBackground = function () {
//     btnBackground.classList.add("red-background");
// };

const toggleColor = function () {
    btnBackground.classList.toggle("red-background");
};

btnBackground.addEventListener('click', toggleColor);