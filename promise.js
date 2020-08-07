// //promise
// const executorFunction = (resolve, reject) =>{
//     const isCoffeeMakerReady = false;
//     if (isCoffeeMakerReady) {
//         resolve("Kopi berhasil dibuat");
//     } else {
//         reject("Mesin Kopi rusak !!")
//     }
// }


// const handleSuccess = resolve =>{
//     console.log(resolve);
// }

// const handleRejected = reject =>{
//     console.log(reject);
// }

// const coffe = new Promise(executorFunction);
// coffe
// .then(handleSuccess)
// .catch(handleRejected);
// // .then(null, handleRejected);


// chainning promise 

const state = {
    isCoffeeMakerReady : true,
    seedStocks : {
        arabica : 250,
        robusta : 60,
        liberica : 80
    }
}


const getSeeds = (type, miligrams) =>{
    return new Promise((resolve,reject) => {
        if (state.seedStocks[type] >= miligrams) {
            state.seedStocks[type] -= miligrams;
            resolve("Biji kopi didapatkan");
        } else {
            reject("Maaf stock nya habis ")
        }

    })
}

const makeCoffee = seeds =>{
    return new Promise((resolve,reject) => {
        if (state.isCoffeeMakerReady) {
            resolve("Kopi berhasil dibuat");
        } else {
            reject("Kopi gagal dibuat");
        }
    })
}

const servingToTable = coffee =>{
    return new Promise((resolve)=>{
        resolve("Pesanan kopi diantar ke meja ");
    })
}


function reversedACoffe(type, miligrams) {
    getSeeds(type, miligrams)
    .then(makeCoffee)
    .then(servingToTable)
    .then(resolvedValue =>{
        console.log(resolvedValue);
    })
    .catch(rejected =>{
        console.log(rejected)
    })
}


reversedACoffe("arabica",90);

//promise all
const arabicaOrder = () =>{
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve("Pesanan kopi arabica selesai !");
        }, 5000)
    })
}

const robustaOrder = () =>{
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve("Pesanan kopi robusta selesai !");
        }, 4000)
    })
}

const libericaOrder = () =>{
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve("Pesanan kopi liberica selesai !");
        }, 3000)
    })
}

const promises = [arabicaOrder(), robustaOrder(), libericaOrder()];

Promise.all(promises)
    .then(resolvedValue =>{
        console.log(resolvedValue);
    })