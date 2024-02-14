// Задание 1
for (let i = 0; i < 11; i++) {
    if (i === 0) {
        console.log(i, "- ноль");
    } else if (i % 2 === 0) {
        console.log(`${i} - чётное число`);
    } else console.log(`${i} - нечётное число`);
}

console.log(" ---------------- ");

// Задание 2
const arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(3, 2);
console.log("result =", arr);

console.log(" ---------------- ");

// Задание 3
const arr2 = [];
for (let i = 0; i < 5; i++) {
    arr2[i] = Math.floor(Math.random() * 10);
}
console.log("array =", arr2);
console.log("sum =", arr2.reduce((number, sum) => sum += number, 0));
console.log("min =", arr2.sort()[0]);
console.log("Number '3' present in array is a", arr2.some(x => x === 3));

console.log(" ---------------- ");

// *Необязательное задание. *
for (let i = 1; i < 21; i++) {
    let line = "";
    for (let j = 0; j < i; j++) {
        line += "*";
    }
    console.log(line);
}