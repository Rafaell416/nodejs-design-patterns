const PersonBuilder = require('./PersonBuilder')

const sue = new PersonBuilder('sue').makeEmployee().makeManager(60).build()
const bill = new PersonBuilder('bill').makeEmployee(50).build()
const phil = new PersonBuilder('phil').makeEmployee(60).build()

//Shoppers
const charles = new PersonBuilder('charles')
                .withMoney(500)
                .withList(['jeans', 'sunglases'])
                .build()


console.log(sue.toString())
console.log(charles.toString())
