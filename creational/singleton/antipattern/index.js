const Logger = require('./Logger')
const Shopper = require('./Shopper')
const Store = require('./Store')

const logger = new Logger()

logger.log('Staring app...')

const Alex = new Shopper('Alex', 500)

const skyShop = new Store('Steep Supplies', [
  {
    item: 'Downhill Skis',
    qty: 5,
    price: 750
  },
  {
    item: 'Knit Hat',
    qty: 20,
    price: 50
  }
])

logger.log('Finished config...')

console.log(`${logger.count} logs total`)
logger.logs.map(log => console.log(` ${log.message}`))
