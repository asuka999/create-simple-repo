const path = require('path')
const exec = require('../../helpers/exec')
const fs = require('../../helpers/fs')
const packageJSON = require('../../helpers/packageJSON')

const resolve = name => path.resolve(__dirname, name)

module.exports = async function() {
  await exec(
    'npm install --save-dev eslint eslint-config-standard eslint-plugin-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-node eslint-plugin-prettier'
  )
  const name = '.eslintrc.js'
  await fs.write(name, await fs.read(resolve('./config.js')))
  await packageJSON.write({scripts: {eslint: 'eslint "**/*.js"'}})
}
