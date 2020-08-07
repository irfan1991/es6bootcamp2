// ambil value element 
const cart_items = document.getElementById("cart");


//es5
// function addProduct(name,category) {
//     return {
//         name : name,
//         category : category,
//     }
// }

// es6
function addProduct(name,category) {
    return {
        name ,
        category 
    }
}

var getProduct = addProduct("Samsung S6", "Gadget");
cart_items.innerHTML = `<b>Nama Product : </b> ${getProduct.name} </br> <b>Category : </b> ${getProduct.category}`;
console.log(getProduct);