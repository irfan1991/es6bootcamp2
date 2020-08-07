const getFood = callback => {
    let food = null;
    let drink = null;
    console.log("Sedang membuat makanan, Silahkan tunggu ..... ");
    setTimeout(()=>{
        food = "Makanan Selesai !!";
        drink = "Minuman Selesai !!";
        callback(food, drink)
       
    }, 3000);
    // return food;
}

// const food = getFood();
// console.log(food);

getFood((food, drink ) => {
    console.log(food);
    console.log(drink);
})