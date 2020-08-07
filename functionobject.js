let nama = 'yogi'
let hobi = 'sambung ayam'


const orang = {
    
    nama , hobi ,
    belajar(x){
        return `Saat ini saya sedang belajar tutorial ${x}`;
    }
}

console.log(orang.nama);
console.log(orang.hobi);
console.log(orang.belajar('Flutter'));