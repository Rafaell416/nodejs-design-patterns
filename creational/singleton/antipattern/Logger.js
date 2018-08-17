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

module.exports = Logger
