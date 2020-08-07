// const ubahNama = ["Habibi","Julia","Wafa"].map(
//     function (nama) {
//         return nama.toUpperCase();
//     }
// );

// arrow function
// const ubahNama = ["Habibi","Julia","Wafa"].map(
//      nama => nama.toUpperCase());


// console.log(...ubahNama);


// reguler function declaration
// function sayHello(greeting) {
//      console.log(`${greeting}`);
// }

// // arrow function declaration
// const sayHello = greeting => console.log(`${greeting}`);


// // reguler function expression
// const sayName = function (name, age ) {
//      console.log(`Hallo !, i am ${name} & my age is ${age} years old `);

// }


// // arrow function expression
// const sayName = (name , age)  =>  console.log(`Hallo !, i am ${name} & my age is ${age} years old `);

// // reguler
// const sayName2 = function () {
//      console.log(`Hallo ! `);
// }


// //arrrow
// const sayName2 = () =>  console.log(`Hallo ! `);
// const sayName2 = _ =>  console.log(`Hallo ! `);

// bolck body function
// const sayHello = language => {
//      if (language.toUpperCase() === "INDONESIA") {
//           return "Selamat Pagi !";
//      } else {
//           return "Good Morning !";
//      }
// }

// console.log(sayHello("INdonesia"));


// this keyword
// reguler 
// function Student(name, age , nik) {
//      this.name = name;
//      this.age =  age;
//      this.nik = nik;
// }

// // const student = new Student("Harry", 32, "012122");

// // const student = {
// //      name : "Harry",
// //      age : 32,
// //      nik : "0212231"
// // }
// // console.log(student.name);
// // console.log(student.age);
// // console.log(student.nik);

// Student.prototype.introMyself = function () {
//      setTimeout(function () {
//           console.log(`Hello nama saya ${this.name}, umur saya ${this.age}`);          
//      }, 300)
// }

// const student = new Student("Arri", 30,"021222");
// student.introMyself();
// console.log(this.name);

// arrow
// function Student(name, age , nik) {
//      this.name = name;
//      this.age =  age;
//      this.nik = nik;
// }

// // const student = new Student("Harry", 32, "012122");

// // const student = {
// //      name : "Harry",
// //      age : 32,
// //      nik : "0212231"
// // }
// // console.log(student.name);
// // console.log(student.age);
// // console.log(student.nik);

// Student.prototype.introMyself = function () {
//      setTimeout(() => {
//           console.log(`Hello nama saya ${this.name}, umur saya ${this.age}`);          
//      }, 300)
// }

// const student = new Student("Arri", 30,"021222");
// student.introMyself();
// console.log(this.name);

// default parameter
//reguler
// function sayHello(name = "Anonimous" , greet = "Hello") {
//      console.log(`${name} ! , ${greet}`);
// }

// sayHello("Karin" , "Apa kabar ?");
// sayHello()

//arrow
const sayHello = (name = "Anonimous" , greet = "Hello") => console.log(`${name} ! , ${greet}`);

sayHello("Karin" , "Apa kabar ?");
sayHello()


