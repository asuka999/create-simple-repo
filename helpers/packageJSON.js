const merge = require('lodash/merge')
const normalizeData = require('normalize-package-data')
const fs = require('./fs')

const name = './package.json'

function exists() {
  return fs.exists(name)
}

async function write(config) {
  const json = await fs.read(name)
  const data = merge(json, config)
  normalizeData(data, true)
  await fs.write(name, data)
}

module.exports = {
  exists,
  write,
}
