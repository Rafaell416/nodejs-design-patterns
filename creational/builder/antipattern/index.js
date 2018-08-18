const Person = require('./Person')

//employees
const sue = new Person('Sue', true, true, 60)
const bill = new Person('Sue', true, false, 20)
const phil = new Person('Sue', false, true, 50)
const nick = new Person('Sue', true, false, 10)

//Shoppers
const charles = new Person('Charles', false, false, 0, 500, ['jeans', 'sunglases'])
const eve = new Person('Eve', false, false, 0, 100)
