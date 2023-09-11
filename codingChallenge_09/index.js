var thermometers_01 = [17, 21, 23]
var thermometers_02= [12, 5, -5, 0, 4]
var printForecast = (arr) => {
    arr.map((item, index) => {
        console.log(`${item}oC in ${index+1} days`);
    })
}
printForecast(thermometers_01);
console.log();
printForecast(thermometers_02)