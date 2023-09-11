var Mark = {
    mass: 95,
    height: 1.88,
    calcBMI: function() {
        this.BMI = this.mass / (this.height ** 2)
        return this.BMI
    }
}
var john = {
    mass: 85,
    height: 1.76,
    calcBMI: function() {
        this.BMI = this.mass / (this.height ** 2)
        return this.BMI
    }
}
Mark.calcBMI() > john.calcBMI() ? console.log(`Mark's BMI (${Mark.calcBMI()}) is higher than John's (${john.calcBMI()})`):console.log(`John's BMI (${john.calcBMI()}) is higher than Mark's (${Mark.calcBMI()})`);