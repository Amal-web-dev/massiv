let carPrices = [4000, 9000, 16000, 15000, 22000, 37000, 70000, 55000, 40000]

let from = prompt('from') // 20000
let till = prompt('till') // 40000


let filtered = carPrices.sort((a, b) => a - b)

filtered = carPrices.filter(price => price >= from && price <= till)

if(filtered.length > 0) {
    console.log(filtered);
} else {
    console.log('У нас нет машин на такую сумму');
}