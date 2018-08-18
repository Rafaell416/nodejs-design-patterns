const Shopper = require('./Shopper')
const Employee = require('./Employee')

const alex = new Shopper('Alex Banks', 100)
const eve = new Employee('Eve Queen', 100, 'This and that')

console.log(alex.toString())
console.log(eve.toString())
