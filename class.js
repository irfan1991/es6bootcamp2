// class Kucing 
// - properties (variable , konstans)
//   - warna  
//   - berat
//   - lebar
//   - tinggi 
// - method (prilaku)
//     - tidur()
//     - main()
//     - makan()

//     // create instance (object)
// const a = new Kucing()
// a.color = "merah"
// a.tidur("rebahan")

// sebelum es6
// function Car(manufaktur, warna) {''
//     this.manufacture =  manufaktur;
//     this.color = warna;
//     this.enginesActive = false;
    
// }

// Car.prototype.starEngines =  function () {
//     console.log("Mobil dinyalakan ...");
//     this.enginesActive = true;
// }

// Car.prototype.info = function () {
//     console.log("Manufacture: "+ this.manufacture);
//     console.log("Color : "+ this.color);
//     console.log("Engines : "+ (this.enginesActive ? "Active" : "InActive"));
// }

// var taniaCar = new Car("Honda", "biru");
// taniaCar.starEngines();
// taniaCar.info();


//es6
class Car {

    constructor(manufaktur, warna) {
        this.manufacture =  manufaktur;
        this.color = warna;
        this.enginesActive = false;
        
    }
    

    starEngines () {
        console.log("Mobil dinyalakan ...");
        this.enginesActive = true;
    }


    info () {
        console.log("Manufacture: "+ this.manufacture);
        console.log("Color : "+ this.color);
        console.log("Engines : "+ (this.enginesActive ? "Active" : "InActive"));
    }

    getcolor(){
        return `Warna mobil ${this.color}`;
    }

    setcolor(value) {
        console.log(`Warna mobile diubah dari ${this.color} menjadi ${value}`);
        this.color = value;
    }

}


var taniaCar = new Car("Honda", "biru");
var daffaCar = new Car("Yamaha", "kuning");
// taniaCar.starEngines();
// taniaCar.info();

// daffaCar.starEngines();
// daffaCar.info();

//mengubah nnilai properti melalui objec
// console.log(`Warna mobil  : ${taniaCar.color}`);
// taniaCar.color = "hijau";
// console.log(`Warna mobil  : ${taniaCar.color}`);

// mengubah nilai dengan method setter - getter
console.log(`Warna mobil  : ${daffaCar.color}`);
daffaCar.setcolor("Putih")
console.log(`Warna mobil  : ${daffaCar.getcolor()}`);