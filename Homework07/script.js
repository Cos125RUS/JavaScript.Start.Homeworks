// 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.
const ddItems = document.querySelectorAll("div.dropdown > div.dropdown-menu > a.dropdown-item");
ddItems.forEach(item => item.classList.add("super-dropdown"));

// 2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.
const btn = document.querySelector("div.dropdown > button.btn");
if (btn.classList.contains("btn-secondary")) {
    btn.classList.remove("btn-secondary");
} else btn.classList.add("btn-secondary");

// 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".
const menu = document.querySelector("div.dropdown > div.menu");
menu.classList.remove("dropdown-menu");

// 4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
// `<a href="#">link</a>`
const dropdown = document.querySelector("div.dropdown");
dropdown.insertAdjacentHTML("afterend", `<a href="#">link</a>`);

// 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".
const ddMenuBtn = document.querySelector("div.dropdown > button#dropdownMenuButton");
ddMenuBtn.id = "superDropdown";

// 6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.
const findAriaLabelledby = function(element) {
    const childs = element.children;
    if (childs.length > 0) {
        Array.from(childs).forEach(el => {
            if (el.hasAttribute("aria-labelledby") && el.getAttribute("aria-labelledby") == "dropdownMenuButton") {
                el.dataset.dd = 3;
            }
            findAriaLabelledby(el);
        });
    }
};
findAriaLabelledby(document.body);

// 7. Удалите атрибут type у элемента с классом "dropdown-toggle".
const ddToggle = document.querySelector("div.dropdown > button.dropdown-toggle");
ddToggle.removeAttribute("type");

