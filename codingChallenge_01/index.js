var Mark = {
    mass: 78,
    height: 1.69
}
var john = {
    mass: 92,
    height: 1.95
}
var BMI_Mark = Mark.mass / (Mark.height ** 2)
var BMI_John = john.mass / (john.height ** 2)

var markHeigherBMI = BMI_Mark > BMI_John;
console.log(markHeigherBMI);