const path = require('path')

const FsProxy = require('./FsProxy')
const fs = new FsProxy(require('fs'))

const textFile = path.join(__dirname, 'README.txt')
const mdFile = path.join(__dirname, 'README.md')

const result = (err, contents) => {
  if (err) {
    console.log('\x07')
    console.log(err)
    process.exit(0)
  }

  console.log('Reading files ...')
  console.log(contents)
}

fs.readFile(textFile, 'UTF-8', result)
fs.readFile(mdFile, 'UTF-8', result)
