// spreading operator ( mengcopy nilai array)(meleburkan nilai array dalm beberapa element berbeda)
// const fruits = ["manggo","banana","apples"];
// console.log(...fruits);
// console.log(fruits[0], fruits[1], fruits[2]);

// using into  variadic function (function bawaan yang menerima banyak parameter )
// const number = [23,56,67,23,16];
// console.log(Math.max(...number));

// combine 2 array or more
const fruits = ["manggo","banana","apples"];
const number = [23,56,67,23,16];

const all = [...fruits, ...number];
console.log(all);