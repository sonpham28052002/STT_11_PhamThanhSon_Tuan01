var Mark = {
    mass: 95,
    height: 1.88
}
var john = {
    mass: 85,
    height: 1.76
}
var BMI_Mark = Mark.mass / (Mark.height ** 2)
var BMI_John = john.mass / (john.height ** 2)

var markHeigherBMI = BMI_Mark > BMI_John;
markHeigherBMI ? console.log(`Chỉ số BMI của Mark(${BMI_Mark.toFixed(1)}) cao hơn BMI của John(${BMI_John.toFixed(1)})`) : console.log(`Chỉ số BMI của Mark(${BMI_Mark.toFixed(1)}) thấp hơn BMI của John(${BMI_John.toFixed(1)})`);