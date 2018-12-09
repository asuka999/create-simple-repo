const path = require('path')
const exec = require('../../helpers/exec')
const fs = require('../../helpers/fs')

const resolve = name => path.resolve(__dirname, name)

module.exports = async function() {
  await exec('npm install --save-dev @babel/core @babel/preset-env')
  const name = 'babel.config.js'
  if (await fs.exists(name)) {
    return
  }
  await fs.write(name, await fs.read(resolve('./config.js')))
}
