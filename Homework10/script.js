const contentDiv = document.querySelector('div.content');
contentDiv.classList.add('content');
const data = JSON.parse(characters);
data.results.forEach(element => {
    console.log(element);
    const divBox = document.createElement('div');
    divBox.classList.add('cart');
    const img = document.createElement('img');
    img.src = element.image;
    img.style.maxWidth = '500px';
    divBox.appendChild(img);
    const name = document.createElement('h2');
    name.textContent = element.name;
    divBox.appendChild(name);
    const gender = document.createElement('p');
    gender.textContent = 'Gender: ' + element.gender;
    divBox.appendChild(gender);
    const species = document.createElement('p');
    species.textContent = 'Species: ' + element.species;
    divBox.appendChild(species);
    const status = document.createElement('p');
    status.textContent = 'Status: ' + element.status;
    divBox.appendChild(status);
    if (element.type != '') {
        const type = document.createElement('p');
        type.textContent = 'Type: ' + element.type;
        divBox.appendChild(type);
    }
    contentDiv.appendChild(divBox);
});