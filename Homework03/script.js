// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени
console.log('Task 1');

const cube = num => {
    let result = Math.pow(num, 3);
    console.log(`${num}^3 = ${result}`);
}

cube(2);
cube(3);


// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"
console.log('\nTask 2');

const salary = money => {

    if (isNaN(money)) {
        console.log("Значение задано неверно");
    } else {
        money *= 0.87;
        console.log(`Размер заработной платы за вычетом налогов равен ${money}`);
    }
}

let pay = prompt('Введите оклад');
salary(pay);


// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел
console.log('\nTask 3');

const findMax = (num1, num2, num3) => {
    // let max = Math.max(num1, num2, num3);
    let max = num1;
    if (max < num2) {
        max = num2;
    }
    if (max < num3) {
        max = num3;
    }
    return max;
}

let num1 = prompt("Введите число №1");
let num2 = prompt("Введите число №2");
let num3 = prompt("Введите число №3");
alert(`Наибольшее число: ${findMax(num1, num2, num3)}`);

// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.
console.log('\nTask 4');

const sum = (x, y) => {
    let result = x + y;
    return result;
}

const diff = (x, y) => {
    let result = 0;
    if (x > y) {
        result = x - y;
    } else if (x < y) {
        result = y - x;
    }
    return result;
}

const mult = (x, y) => {
    let result = x * y;
    return result;
}

const div = (x, y) => {
    let result = x / y;
    return result;
}

console.log(sum(2, 8));
console.log(diff(2, 8));
console.log(mult(2, 8));
console.log(div(2, 8));