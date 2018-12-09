const merge = require('lodash/merge')
const normalizeData = require('normalize-package-data')
const fs = require('./fs')

async function write(config) {
  const name = './package.json'
  const json = await fs.read(name)
  const data = merge(json, config)
  normalizeData(data, true)
  await fs.write(name, data)
}

module.exports = {
  write,
}
