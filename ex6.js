let maxNumber = 500;
let firstNumber = 0;
let secondNumber = 1;
let filter = 0;

while (firstNumber < maxNumber) {
  console.log(firstNumber);
  filter = firstNumber + secondNumber;
  firstNumber = secondNumber;
  secondNumber = filter;
}

// Напишете скрипт, който да показва всички числа от редицата на Фибоначи. Числата трявба да са лимитирани и да не надминават стойност от 500. За целта използвайте “while”!
