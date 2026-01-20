// const numbers = [1, 2, 3, 4, 5];

// const [first, ...rest] = numbers;

// console.log(first); // 1
// console.log(rest);  // [2,3,4,5]




// const nums = [1, 2, 3];
// const squared = nums.map(n => n * n);

// console.log(squared);



const users = [{ user: "faizan", id: 1 }, { user: "riz", id: 3 }, { user: "sehar", id: 2 }]

const index = users.findIndex(i => i.id === 3);

console.log(index);


// const user = users.find(u => u.id === 3);

// console.log(user)



const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const even = nums.filter(u => u % 2 === 0);
const odd = nums.filter(u => u % 2 !== 0)

console.log(even);
console.log(odd);


// const users = ['Faizan', 'Saeednan', 'Gulshan', 'Ifra'];

// const fUsers = users.filter(u => u.startsWith('F'));

// console.log(fUsers);



const cart = [
    { price: 500, qty: 2 },
    { price: 1000, qty: 1 },
    { price: 5000, qty: 3 },
    { price: 500, qty: 3 }
]

const total = cart.reduce(
    (sum, items) => sum + items.price * items.qty, 0
);

console.log(total);



// const user = { userName: "Faizan", age: 19 };

// const { userName: naam, age: umar } = user;

// console.log(naam);



// const colors = ["green", "red", "purple"]

// const [first, second, third] = colors

// console.log(first);




const numbers = [1, 2, 3, 4, 5, 6];

const [first, ...rest] = numbers;

console.log(first);
console.log(rest);


const userDetails = { userName: "Faizan", age: 18, role: "Full-Stack Dev" };

const { userName, ...otherDetails } = userDetails;

console.log(otherDetails);




// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// const numberThatIDontWant = numbers.filter(n => n % 2 !== 0);

// console.log(numberThatIDontWant);



const user = {
    userName: "Faizan",
    age: 19,
    otherData: {
        cast: "Malik",
        gender: "Male"
    }
};

const { otherData: { cast, gender } } = user;

console.log(cast);



// function printUser({ userName, age }) {
//     console.log(userName);
//     console.log(age);
// };


// printUser({ userName: "Faizan", age: 19 });




// const nums = [1, 2, 3];
// const squared = nums.map(n => n * n);

// console.log(squared);





// async function getUser() {
//     const res = await fetch('https://jsonplaceholder.typicode.com/todos/1').then(resolve => )
//     const data = await res.json();
//     console.log(data);
// }

// getUser();



fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => console.log('Data:', data))
    .catch(error => console.log('Error:', error));



// This is the example for understanding `this` keyword and it's behaviour

// const user = {
//     userName: "Faizan",
//     mail: "faizan@gmail.com",
//     age: 19,
//     meet: function () {
//         console.log(this.age)
//     },
//     otherData: {
//         height: "5'10''",
//         skinTone: "Brownish",
//         hairColor: "Dark Black",
//         greet: function () {
//             console.log(this.height);
//         }
//     }
// }

// user.meet();
// user.otherData.greet();


// Inherited value from parent scope or surrounding scope (talking about `this` kehword behaviour as lexically bound for arrow function.)

const person = {
    name: "John",
    greet: function () {
        setTimeout(() => {
            console.log(this.name);
        }, 1000);
    }
};

person.greet();
