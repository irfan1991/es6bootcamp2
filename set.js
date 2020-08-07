// var buah = new Set();

// buah.add("Mangga").add("Jeruk").add("Apple").add("Jambu")


// buah.clear();
// console.log(buah.size);
// console.log(buah);

// buah.delete("Apple")

// console.log(buah.size);
// console.log(buah.has("Orange"));
// console.log(buah);

var buah = ["Apel", "Jeruk","Mangga","Rambutan","Semangka"];

var setBuah = new Set(buah);
setBuah.delete("Apel");

buah = [...setBuah];

console.log(buah);
console.log(setBuah);