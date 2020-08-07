products =  document.getElementById("products");


const myProducts = ['Pencil', 'Pen', 'Ruler', 'Ereser'];
console.log(myProducts[0]);
// products.innerHTML = `${myProducts[0]}`;

//menambahkan item ke array
myProducts.push('Cup');

let parent = '<ul>';
myProducts.forEach((product) => {
    parent += `<li> ${product} </li>`
    console.log(product);
});

parent += '</ul>';

products.innerHTML = parent;