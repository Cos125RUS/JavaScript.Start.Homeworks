// Task №1
let num1 = Number(prompt("Num1 = "));
let num2 = Number(prompt("Num2 = "));

console.log(num1 <= 1 && num2 >= 3);


// Task №2
let test = true;

console.log(test === true ? '+++' : '---');


// Task №3
let day = Number(prompt("Введите день месяца (от 1 до 31)"));;

if (day > 0 && day <= 10) {
    console.log("Первая декада");
} else if (day <= 20) {
    console.log("Вторая декада");
} else if (day <= 31) {
    console.log("Третья декада");
} else {
    console.log("Ерунду ввёл");
}


// Task №4
let number = Number(prompt("Enter the number (0 - 999)"));
let hundreds = parseInt(number / 100);
let tens = parseInt(number % 100 / 10);
let ones = parseInt(number % 100 % 10);
console.log(`В числе ${number} количество сотен: ${hundreds}, десятков: ${tens}, единиц: ${ones}`);