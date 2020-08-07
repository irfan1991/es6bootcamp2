const student = {
    firstName  : "Andik",
    lastName : "Firmansyah",
    age : 19
}

// const announcement = "Dear student, " + student.firstName + " "+ student.lastName + "\n" +
// "Your age is "+ student.age + " years old";
const announcement = `Dear student, ${student.firstName} ${student.lastName}

Your age is ${student.age} years old`;

// console.log("Nama : "+ student.firstName + " "+ student.lastName+ " Umur: "+ student.age);
console.log(`Nama : ${student.firstName} ${student.lastName} Umur : ${student.age}`);
console.log(announcement);