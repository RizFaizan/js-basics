const nums = [1, 2, 3, 4, 5];

const multipliedByThree = nums.map(n => n * 3);
console.log(multipliedByThree);


const fruits = ["apple", "banana", "mango"];

const upperCased = fruits.map(n => n.toUpperCase());
console.log(upperCased);


const newNums = [10, 20, 30, 40, 50];

const string = newNums.map(n => n.toString().concat("€"))
console.log(string)


const books = [
    { title: "Harry Potter", pages: 300 },
    { title: "The Hobbit", pages: 250 },
    { title: "1984", pages: 328 }
];

const novels = [
    { title: "Harry Potter", pages: 300 },
    { title: "The Hobbit", pages: 250 },
    { title: "1984", pages: 328 }
];

const booksTitle = books.map(n => n.title);
console.log(booksTitle);



const temp = [0, 15, 30, 45];

const tempInCelcius = temp.map(n => (n * 9 / 5) + 32);
console.log(tempInCelcius);



const arr = [1, 2, 3, 4, 5];

const result = arr.map(n => n % 2 === 0 ? n * 2 : n * 3);
console.log(result);




// Advanced exercise

const products = [
    { name: "Laptop", price: 1000, discount: 0.1 },
    { name: "Phone", price: 500, discount: 0.2 },
    { name: "Tablet", price: 300, discount: 0.05 }
];


const updatedProducts = products.map(n => ({
    name: n.name,
    finalPrice: n.price * (1 - n.discount)
}));

console.log(updatedProducts)



const numbers = [1, 2, 3, 4];
const multipliers = [10, 20, 30, 40];

const finalResult = numbers.map((nItems, mMultiplier) => nItems * multipliers[mMultiplier]);
console.log(finalResult);




const arrOfString = ["JavaScript", "is", "awesome"];
const newResult = arrOfString.map(str => {
    return {
        word: str,
        length: str.length,
        islong: str.length > 5
    }
})

console.log(newResult);



const givenArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const even = givenArray.filter(n => n % 2 === 0);

console.log(even);


const fruitsArray = ["apple", "banana", "cherry", "date", "elderberry"];
const resultFruit = fruitsArray.filter(n => n.length >= 5);

console.log(resultFruit);




const number = [15, -3, 0, 8, -10, 12];
const finalNum = number.filter(n => n >= 0);

console.log(finalNum);




const students = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 45 },
    { name: "Charlie", grade: 92 },
    { name: "Diana", grade: 78 }
];

const passed = students.filter(n => n.grade >= 60)
console.log(passed);



const arrOfWords = ["hello", "world", "javascript", "filter", "method", "array", "ethanol"];
const arrOfVowels = arrOfWords.filter(n => n.length >= 4 & n.startsWith("a"));

console.log(arrOfVowels);



const arrOfNums = [12, 34, 56, 78, 90];
const sumOfNums = arrOfNums.filter(n => n.toString().split('').map(Number).reduce((sum, acc) => sum + acc, 0) > 10);

console.log(sumOfNums);


const arrayOfNumbers = [12, 34, 56, 78, 90];
const sumOfNumbers = arrOfNums.filter(n => n.toString().split('').map(Number).reduce((sum, acc) => sum + acc, 0) > 10);

console.log(sumOfNumbers);