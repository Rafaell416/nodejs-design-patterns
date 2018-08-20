const { writeFile, existsSync, readFileSync, unlink } = require('fs')

class LocalStorage {
  constructor(){
    if (existsSync('localStorage.json')) {
      console.log('Loading data from localStorage.json')
      const txt = readFileSync('localStorage.json')
      this.items = JSON.parse(txt)
    } else {
      this.items = {}
    }
  }

  get length () {
    return Object.keys(this.items).length
  }

  setItem (key, value) {
    this.items[key] = value
    writeFile('localStorage.json', JSON.stringify(this.items), (err) => {
      if (err) {
        console.log('There was an error writing file ==>', err)
      }
    })
  }

  getItem (key) {
    return this.items[key]
  }

  clear () {
    this.items = {}
    unlink('localStorage.json', () => {
      console.log('localStorage.json file removed')
    })
  }
}

module.exports = new LocalStorage()
