class Logger {
  constructor(){
    this.logs = []
  }

  get count () {
    return this.logs.length
  }

  log (message) {
    const timestamp = new Date().toISOString()
    this.logs.push({ message })
    console.log(`${timestamp} - ${message}`)
  }
}

// one way
class Singleton {
  constructor(){
    if (!Singleton.instance) {
      Singleton.instance = new Logger()
    }
  }

  getInstance () {
    return Singleton.instance
  }
}

module.exports = Singleton

//module.exports = new Logger()  <-- easier way to import instance
