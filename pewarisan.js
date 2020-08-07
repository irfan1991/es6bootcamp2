class Vehicle {

    constructor(lisensi ,manufaktur) {
        this.manufacture =  manufaktur;
        this.enginesActive = false;
        this.licensePlate = lisensi;
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

    parking(){
        console.log(`Kendaraan ${this.licensePlate} parkir`)
    }    

}


class VihecleFactory {
    static repair(vihecles){
        vihecles.forEach(vihecle => {
            console.log(`Kendaaan ${vihecle.licensePlate} sedang melakukan  perawatan`)
        });
    }
}

class Car  extends Vehicle {

    constructor(manufacture ,licensePlate, warna, roda) {
        super(manufacture,licensePlate)
        this.color = warna;
        this.wheels = roda;
        
    }
    

    droveOff(){
        console.log(`Kendaraan ${this.licensePlate} melaju !`)
    }

    openDoor(){
        console.log(`Membuka pintu !`);
    }

  
    getcolor(){
        return `Warna mobil ${this.color}`;
    }

    setcolor(value) {
        console.log(`Warna mobile diubah dari ${this.color} menjadi ${value}`);
        this.color = value;
    }

    info(){
        //overring method
        super.info();
        console.log(`Jumlah roda : ${this.wheels}`);
    }

}

class MotorCycle extends Vehicle {

    constructor(manufacture ,licensePlate, warna, roda) {
        super(manufacture,licensePlate)
        this.color = warna;
        this.wheels = roda;
        
    }
    

    droveOff(){
        console.log(`Kendaraan ${this.licensePlate} melaju !`)
    }

    openDoor(){
        console.log(`Membuka pintu !`);
    }

  
    getcolor(){
        return `Warna mobil ${this.color}`;
    }

    setcolor(value) {
        console.log(`Warna mobile diubah dari ${this.color} menjadi ${value}`);
        this.color = value;
    }

    info(){
        //overring method
        super.info();
        console.log(`Jumlah roda : ${this.wheels}`);
    }

}



const taniaCar = new Car("Honda","H1215","biru", 4);
const fitriCar = new Car("Senia","H1212","pink", 4);
const ahmadMotor = new MotorCycle("Yamaha","H1215","hitam", 2);
// taniaCar.starEngines();
// taniaCar.info();


VihecleFactory.repair([taniaCar,fitriCar,ahmadMotor]);

