"use strict";

// 1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input'е тег span также должен меняться.
const inputEl = document.querySelector('input#from');
const spanEl = document.querySelector('span');
inputEl.addEventListener('input', function (e) {
    spanEl.innerHTML = e.target.value;
});

// 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
// - добавить два класса: animate_animated и animate_fadeInLeftBig
// - поставить данному элементу стиль visibility в значение 'visible'.
const messageBtnEl = document.querySelector('button.messageBtn');
const messageEl = document.querySelector('.message');
messageBtnEl.addEventListener('click', function (e) {
    messageEl.classList.add('animate_animated');
    setTimeout(() => {
        messageEl.classList.add('animate_fadeInLeftBig');
    }, 1000);
    messageEl.style.visibility = 'visible';
});

// 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
// - Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
// - Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.
const formEl = document.querySelector('form');
const controlEls = formEl.querySelectorAll('.form-control');
const buttonSubmitEl = formEl.querySelector('button');
const submitFunction = () => {
    controlEls.forEach(el => {
        if (el.value === "") {
            this.event.preventDefault();
            el.classList.add('error');
        } else {
            el.classList.remove('error');
        }
    });
};
buttonSubmitEl.addEventListener('click', submitFunction);
formEl.addEventListener('submit', submitFunction);