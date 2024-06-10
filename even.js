const numbers = [1, 2, 3, 4, 5, 6]


const getEvenNumbers = numbers => numbers.filter(number => number % 2 === 0);

const evenNumbers = getEvenNumbers(numbers);
document.getElementById('even').innerHTML=evenNumbers;