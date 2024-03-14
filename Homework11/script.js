const parseData = JSON.parse(feturedItems);
const itemsBox = document.querySelector('div.fetured__items');

const template = fetured__item.content;
parseData.forEach(element => {
    const newTemplate = template.cloneNode(true);
    const img = newTemplate.querySelector('.fetured__img');
    img.src = element.img;
    const name = newTemplate.querySelector('.fetured__name');
    name.textContent = element.name;
    const description = newTemplate.querySelector('.fetured__description');
    description.textContent = element.description;
    const price = newTemplate.querySelector('.fetured__price > span');
    price.textContent = element.price;
    itemsBox.appendChild(newTemplate);
});