const ScoutPrototype = require('./ScoutPrototype')

const alex = ScoutPrototype.clone()
alex.name = 'Alex Banks'
alex.addItemToList('slingshot')

const eve = ScoutPrototype.clone()
eve.name = 'Eve Parker'
eve.addItemToList('reading light')


console.log(`${alex.name}: ${alex.shoppingList}`)
console.log(`${eve.name}: ${eve.shoppingList}`)
