// rest parameter

// function sum(...numbers) {
//     var result = 0;
//     for (let number of numbers) {
//         result += number;
//     }

//     return result;
// }

// console.log(sum(2,3,4,5,6));


// rest parameter array destructuring
const fruits = ["manggo","banana","apples","milk","egg","cheese"];

const [A, B, C, ...D] = fruits;

console.log(A);
console.log(B);
console.log(C);
console.log(D);
