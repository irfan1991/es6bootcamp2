//destructuring array manual
// const fruits = ["manggo","banana","apples"];

// // const myFruit = fruits[0];
// // const favoriteFruit = fruits[1];
// // const ourFruit = fruits[2];

// // console.log(fruits);
// // console.log(myFruit,favoriteFruit,ourFruit);
// const [h,g,ourFruit] = fruits;
// console.log(h);
// console.log(g);
// console.log(ourFruit);


// destructuring array assigment

// const fruits = ["manggo","banana","apples"];

// let myFruit = "Watermelon";
// let favoriteFruit = "orange";

// fruits[0] = myFruit;
// fruits[1] = favoriteFruit;

// [myFruit,favoriteFruit] = fruits;

// console.log(myFruit);
// console.log(favoriteFruit);


// var a = 3 ;
// var b = 4;
// // var temp;

// console.log("Sebelum diubah ");
// console.log(`Nilai a : ${a}`);
// console.log(`Nilai b: ${b}`);

// // temp = a;
// // a = b;
// // b = temp;
// [a,b] = [b,a];

// console.log("Sesudah diubah ");
// console.log(`Nilai a : ${a}`);
// console.log(`Nilai b: ${b}`);

// array destructuring defaut value
const fruits = ["manggo","banana","apples"];
// const [h,g,ourFruit,myFruit] = fruits;
const [h,g,ourFruit,myFruit = "orange"] = fruits;

console.log(h);
console.log(g);
console.log(ourFruit);
console.log(myFruit);



//destructuring object manual
// const student = {
//     firstName : "Andik",
//     lastName : "Firmansyah",
//     age : 20
// }

// // const firstName =  student.firstName;
// // const lastName = student.lastName;
// // const age = student.age;

// const {firstName, lastName, age} = student;
// console.log(firstName,lastName,age);


//destructuring object assigment
// const student = {
//     firstName : "Andik",
//     lastName : "Firmansyah",
//     age : 20
// }

// let firstName = "Juan";
// let age = 23;

// student.firstName = firstName;
// student.age = age;
// ({ firstName, age} = student);
// console.log(firstName, age);

//destructuring object default values 
// const student = {
//     firstName : "Andik",
//     lastName : "Firmansyah",
//     age : 20
// }

// const {firstName,lastName,age, isMale = true} = student;
// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(isMale);


//destructuring object  assigning to different local variable names
// const student = {
//     firstName : "Andik",
//     lastName : "Firmansyah",
//     age : 20
// }

// const {firstName : localFirstName,lastName : localLastName ,age : localAge} = student;
// console.log(localFirstName);
// console.log(localLastName);
// console.log(localAge);
