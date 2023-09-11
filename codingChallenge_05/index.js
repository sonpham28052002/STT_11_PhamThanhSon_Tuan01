var Dolphins = [44,23,71];
var Koalas = [65,54,49];
var calcAverage = (arr) => {
    return arr.reduce((acc, num) => acc + num) / arr.length;
}

var checkWinner = (avgDolhins,avgKoalas) =>{
    return avgDolhins> avgKoalas ? console.log(`Dolphins win (${avgDolhins.toFixed(3)} vs. ${avgKoalas.toFixed(3)})`) : console.log(`Koalas win (${avgKoalas.toFixed(3)} vs. ${avgDolhins.toFixed(3)})`);
}
var avgDolphins = calcAverage(Dolphins);
var avgKoalas = calcAverage(Koalas);
checkWinner(avgDolphins,avgKoalas);