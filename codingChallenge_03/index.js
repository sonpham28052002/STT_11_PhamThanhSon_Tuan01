var Dolphins = [98, 108, 89]
var Koalas = [98, 108, 89]
var maenDolphins = Dolphins.reduce((acc, num) => acc + num) / Dolphins.length
var meanKoalas = Koalas.reduce((acc, num) => acc + num) / Koalas.length
console.log(`điểm trung bình của đội Dolphins là ${maenDolphins.toFixed(3)}`);
console.log(`điểm trung bình của đội Koalas là ${meanKoalas.toFixed(3)}`);
var checkpoint
if (maenDolphins > meanKoalas) {
    console.log('\t=> đội Dolphins chiến thắng');
    maenDolphins >= 100 ? console.log(`Dolphins giành được cup với số điểm ${maenDolphins.toFixed(3)}`) : console.log("Dolphins chiến thắng nhưng điểm không quá 100 nên không nhận cúp");
} else if (meanKoalas > maenDolphins) {
    console.log("\t=> đội Koalas chiến thắng");
    meanKoalas >= 100 ? console.log(`Koalas giành được cup với số điểm ${meanKoalas.toFixed(3)}`) : console.log("Koalas chiến thắng nhưng điểm không quá 100 nên không nhận cúp");
} else {
    console.log("\t=> hai đội hòa nhau");
    meanKoalas >= 100 ? console.log(`Hòa nhau được nhận cup`) : console.log("Cả hai chiến thắng nhưng điểm không quá 100 nên không nhận cúp");
}