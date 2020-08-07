// async - await with handle reject
// const getCoffee = () =>{
//     return new Promise((resolve, reject)=>{
//         const seeds = 100;

//         setTimeout(() => {
//             if (seeds >= 10) {
//                 resolve("Coffee dapat dibuat !!")
//             } else {
//                 reject("BIji kopi habis ")
//             }
//         }, 1000)
//     })
// }

// async function makeCoffee() {
//     try {
//         const coffee = await getCoffee();
//         console.log(coffee);
//     } catch (error) {
//         console.log(error);
//     }
  
// }


// makeCoffee()

// async -await chainning promise 


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


async function reversedACoffe(type, miligrams) {
    try {
        const seeds =  await getSeeds(type, miligrams);
        const coffee = await makeCoffee(seeds);
        const result = await servingToTable(coffee);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
   
   
}


reversedACoffe("liberica",80);