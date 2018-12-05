const fs = require('fs')
const util = require('util')

const stat = util.promisify(fs.stat)
function exists(name) {
  return stat.catch(err => false)
}

const writeFile = util.promisify(fs.writeFile)
function write(name, content) {
  return writeFile(name, typeof content === 'string' ? content : JSON.stringify(content, null, 2))
}


