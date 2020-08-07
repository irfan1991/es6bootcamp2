products =  document.getElementById("products");


const myProducts = ['Pencil', 'Pen', 'Ruler', 'Ereser',2];

// myProducts.forEach((product) =>{
//     console.log(`${product}`)
// })

const printProducts = myProducts.map(product => {
    return product;
});

//filter data 
const myPrimaryProducts = myProducts.filter(product => {
    return product !== "Ruler"
})

// console.log(myPrimaryProducts);
// products.innerHTML = myPrimaryProducts;

//include data
// const something = myProducts.includes('Pencil');
// const angka = myProducts.includes(2);

//console.log(angka);

//some
// const angka = [1,2,3,4,5,6,7,8,9];

// // mengecek apakah ada element array yang habis dibagi dua
// // const some = angka.some(item => item % 2);
// // console.log(some);

// // // mengecek apakah ada elemt array yang kurang dari 0
// // const thing = angka.some(item => item < 0);
// // console.log(thing);

// //every
// // mengecek apakah semua elemtn lebih dari 5
// // const greaterFive = angka.every(item => item > 4);
// // console.log(greaterFive);

// // // mengecek apakah semua element kurang dari 10
// // const lessTen = angka.every(item => item < 10);
// // console.log(lessTen);

// //reduce
// const sum = angka.reduce((total,value) => total +  value , 2);
// console.log(sum);

//sort
// const angka1 = [20,10,3,20,58,42,6,9];
// const huruf =  ['z','a','c','g','p'];

// //ascending order 
// const ascOrder = angka1.sort((a,b) => a > b ? 1 : -1);
// console.log(ascOrder);

// // descending order
// const descOrder = angka1.sort((a,b) => a > b ? -1 : 1);
// console.log(descOrder);

//concat
// const fruit = ['apple','banana','mango'];
// const number = [1,2,3];

// const newArray = fruit.concat(number);
// console.log(newArray);

//Array.of
const namaIkan = Array.of("Ikan Telli", "IKan rere", "IKan Paus");
console.log(namaIkan);

