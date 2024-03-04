"use strict";

// 1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером.
document.addEventListener('DOMContentLoaded', function (e) {
    console.log("все теги прогрузились");
});

// 2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены.
window.addEventListener('load', function (e) {
    console.log("страница загрузилась");
});

// 3. При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие:
// - Класс "super_element" присутствует в элементе "div".
// - сообщение должно определять присутствует или отсутствует класс "super_element"
// - у элемента, а также выводить в нижнем регистре верный тег в данной строке, по
// - которому был совершен клик.
// - Необходимо использовать делегирование.
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('super_element')) {
        console.log(`super_element присутствует в элементе ${e.target.tagName.toLowerCase()}`);
    } else {
        console.log(`super_element отсутствует в элементе ${e.target.tagName.toLowerCase()}`);
    }
});

// 4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea."
document.querySelector('textarea').addEventListener('mouseover', function (e) {
    console.log("Вы навели на textarea.");
});

// 5. Необходимо повесить событие клика на тег ul. В обработчике события в консоль необходимо выводить текст, который записан внутри элемента кнопки, по которой был произведен клик. Если клик был не по кнопке, то ничего выводить не нужно. Необходимо использовать делегирование.
document.querySelector('ul').addEventListener('click', function(e) {
    if (e.target.tagName.toLowerCase() === 'button') {
        console.log(e.target.innerHTML);
    }
});

// 6. Вопрос: Почему в console.log пишется сначала текст из 5 задания и только потом выводится текст из 3 задания, если мы кликаем по кнопкам в ul? Ответ необходимо написать здесь же, под этим комментарием, своими словами.
// Ответ: Вывод в консоль происходит в момент всплытия события, а тег ul ближе к элементу таргета, чем document

// 7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.
const liList = Array.from(document.querySelectorAll('li'));
for (let i = 1; i < liList.length; i+=2) {
    liList[i].style.backgroundColor = 'red';
}