var bill = [125, 555 , 44]

var calcTip = (arr) =>{
     return arr.map((item) =>{    
         return (item >= 50 && item <=300) ? item*0.15 : item*0.2;
    })
}
var tip = calcTip(bill);
var total = tip.map((item, index) =>{
    return item + bill[index];
})
console.log(total);