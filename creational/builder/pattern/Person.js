class Person {
  constructor(builder){
    const { name, isEmployee, isManager, hours, money, shoppingList } = builder
    this.name = name
    this.isEmployee = isEmployee
    this.isManager = isManager
    this.hours = hours || 0
    this.money = money || 0
    this.shoppingList = shoppingList || []
  }

  toString () {
    return JSON.stringify(this)
  }
}

module.exports = Person
