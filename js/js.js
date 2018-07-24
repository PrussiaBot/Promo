"use strict"
var allWindows = document.querySelectorAll('.select li');
var windowOne = document.querySelector('.select li:first-child');
var windowTwo = document.querySelector('.select li:nth-child(2)');
var windowThree = document.querySelector('.select li:nth-child(3)');
var windowFour = document.querySelector('.select li:nth-child(4)');
var windowFive = document.querySelector('.select li:nth-child(5)');
var windowSix = document.querySelector('.select li:nth-child(6)');
var windowSeven = document.querySelector('.select li:last-child');
var windowExample = document.querySelector('.first-block img');
var exampleName = document.querySelector('.first-block p')
var removeClassCheck = function (array) {
    for (var i = 0; i < array.length; i++){
        array[i].classList.remove('check');
    }
};
windowOne.addEventListener('click', function () {
    removeClassCheck(allWindows);
    windowOne.classList.add('check');
    windowExample.src = 'png/example_1.jpg';
    exampleName.textContent = 'Ирландский дуб';
});
windowTwo.addEventListener('click', function () {
    removeClassCheck(allWindows);
    windowTwo.classList.add('check');
    windowExample.src = 'png/example_2.png';
    exampleName.textContent = 'Вишня';
});
windowThree.addEventListener('click', function () {
    removeClassCheck(allWindows);
    windowThree.classList.add('check');
    windowExample.src = 'png/example_3.png';
    exampleName.textContent = 'Макоре';
});
windowFour.addEventListener('click', function () {
    removeClassCheck(allWindows);
    windowFour.classList.add('check');
    windowExample.src = 'png/example_4.png';
    exampleName.textContent = 'Липа';
});
windowFive.addEventListener('click', function () {
    removeClassCheck(allWindows);
    windowFive.classList.add('check');
    windowExample.src = 'png/example_5.png';
    exampleName.textContent = 'Амарант';
});
windowSix.addEventListener('click', function () {
    removeClassCheck(allWindows);
    windowSix.classList.add('check');
    windowExample.src = 'png/example_6.png';
    exampleName.textContent = 'Берлиния';
});
windowSeven.addEventListener('click', function () {
    removeClassCheck(allWindows);
    windowSeven.classList.add('check');
    windowExample.src = 'png/example_7.png';
    exampleName.textContent = 'Габон';
});