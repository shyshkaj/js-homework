//task1
let a = 1;
let b = 2;
let c = 3;

if (a < b && b < c) {
  console.log("a < b < c is true");
} else {
  console.log("a < b < c is false");
}
//task2
let x = 1;
let y = 2;

let res1 = ""+x+y;// Допишіть код, необхідно використовувати змінні x і y
console.log(res1); // ""12""
console.log(typeof res1); // ""string""

let res2 = Boolean(y) + "" + y ;// Допишіть код, необхідно використовувати змінні x і y
console.log(res2); // ""true2""
console.log(typeof res2); // ""string""

let res3 = Boolean(y > x);// Допишіть код, необхідно використовувати змінні x і y
console.log(res3); // true
console.log(typeof res3); // ""boolean""

let res4 =  x/y;//Допишіть код, необхідно використовувати змінні x і y
console.log(res4); // NaN
console.log(typeof res4); // ""number""

//task3
const isAdult = prompt("Будь ласка введіть свій вік");
if (isAdult > 18) {
  alert('Ви досягли повнолітнього віку', isAdult);
} else {
  alert("Ви ще надто молоді", isAdult);
}
//task4
let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5];

// Знаходимо число, яке найбільш часто входить в масив
let mostFrequentNumber = arr.reduce((acc, num) => {
  acc[num] = (acc[num] || 0) + 1;
  return acc;
}, {});

mostFrequentNumber = Object.keys(mostFrequentNumber).reduce((a, b) =>
  mostFrequentNumber[a] > mostFrequentNumber[b] ? a : b
);

// Оновлюємо поточний масив, видаляючи входження числа
let newArr = arr.filter(num => num !== parseInt(mostFrequentNumber));

arr = newArr; // Оновлення поточного масиву

console.log("Most frequent number:", mostFrequentNumber);
console.log("Updated arr:", arr);
//task5
// Введення довжин сторін трикутника
// Введення довжин сторін трикутника
let sideA = parseFloat(prompt("Введіть довжину сторони A:"));
let sideB = parseFloat(prompt("Введіть довжину сторони B:"));
let sideC = parseFloat(prompt("Введіть довжину сторони C:"));

// Перевірка на коректність введених значень
if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC) || sideA <= 0 || sideB <= 0 || sideC <= 0) {
  console.log("Incorrect data");
} else {
  // Перевірка на прямокутний трикутник
  let isRightTriangle = false;
  if (sideA * sideA + sideB * sideB === sideC * sideC || sideB * sideB + sideC * sideC === sideA * sideA || sideC * sideC + sideA * sideA === sideB * sideB) {
    isRightTriangle = true;
  }

  // Обчислення площі трикутника за формулою Герона
  let semiPerimeter = (sideA + sideB + sideC) / 2;
  let area = Math.sqrt(semiPerimeter * (semiPerimeter - sideA) * (semiPerimeter - sideB) * (semiPerimeter - sideC));

  // Виведення результатів
  console.log("Площа трикутника: " + area.toFixed(3));
  console.log("Цей трикутник є прямокутним: " + isRightTriangle);
  //task6
// Отримуємо поточний час
const currentTime = new Date();
// Отримуємо години з поточного часу
const hours = currentTime.getHours();

// Використовуємо умовний оператор switch для визначення часу доби
switch (true) {
  case hours >= 23 && hours <5:
    console.log("Доброї ночі!");
    break;
  case hours >=  5 && hours < 11:
    console.log("Доброго ранку!");
    break;
  case hours >= 11 && hours < 17:
    console.log("Доброго дня!");
    break;
  default:
    console.log("Доброго вечора!");
}
