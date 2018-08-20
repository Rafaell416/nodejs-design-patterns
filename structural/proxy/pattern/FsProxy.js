class FsProxy {
  constructor(fs_subject){
    this.fs = fs_subject
  }

  readFile (path, format, callback) {
    if (!path.match(/.md$|.MD$ /)) {
      return callback(new Error(`Can only read markdown files.`))
    }

    this.fs.readFile(path, format, (err, contents) => {
      if (err) {
        console.error(err)
        return callback(err)
      }

      callback(null, contents)
    })
  }

}

module.exports = FsProxy
