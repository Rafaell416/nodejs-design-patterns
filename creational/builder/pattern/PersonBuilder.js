const Person = require('./Person')

class PersonBuilder {
  constructor(name){
    this.name = name
  }

  makeEmployee () {
    this.isEmployee = true
    return this
  }

  makeManager (hours = 40) {
    this.isManager = true
    this.hours = hours
    return this
  }

  makePartTime (hours = 20) {
    this.hours = 20
    return this
  }

  withMoney (money) {
    this.money = money
    return this
  }

  withList (list = []) {
    this.shoppingList = list
    return this
  }

  build () {
    const build = new Person(this)
    return build
  }
}


module.exports = PersonBuilder
