const path = require('path')
const exec = require('../../helpers/exec')
const fs = require('../../helpers/fs')

const resolve = name => path.resolve(__dirname, name)

module.exports = async function() {
  await exec('git init')
  const name = '.gitignore'
  fs.write(name, await fs.read(resolve('./config')))
}
