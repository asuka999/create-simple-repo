const fs = require('fs')
const util = require('util')

const stat = util.promisify(fs.stat)
function exists(name) {
  return stat(name).catch(() => false)
}

const readFile = util.promisify(fs.readFile)
function read(name) {
  return readFile(name, 'utf8').then(str => {
    if (name.endsWith('json')) {
      return JSON.parse(str)
    }
    return str
  })
}

const writeFile = util.promisify(fs.writeFile)
function write(name, content) {
  return writeFile(
    name,
    typeof content === 'string' ? content : JSON.stringify(content, null, 2),
    'utf8'
  )
}

module.exports = {
  exists,
  write,
  read,
}
