var bill = [{
    name: 'bánh',
    price: 100
}, {
    name: 'áo',
    price: 200
}]
var totalBill = bill.reduce((acc, num) => { return acc.price + num.price })
console.log(totalBill);
var tip = (totalBill >= 50 && totalBill <= 300) ? totalBill * 0.15 : totalBill * 0.2;
console.table(bill)
console.log(`=>Tổng hóa đơn là ${totalBill} \n Tiền tip là: ${tip}`);