const assert = require('assert').strict
const fs = require('fs').promises
const path = require('path')
const dirCompare = require('dir-compare')
const rimraf = require('rimraf')
const create = require('../main/create')

const current = 'tmp'
const prev = 'snapshot'

async function test() {
  await create(path.resolve(__dirname, '../templates/app'), current)
  if (!(await fs.stat(prev).then(() => true, () => false))) {
    await fs.rename(current, prev)
    return
  }

  const res = await dirCompare.compare(prev, current, {
    compareContent: true,
    excludeFilter: 'node_modules',
  })
  await new Promise((resolve, reject) =>
    rimraf(current, err => (err ? reject(err) : resolve()))
  )
  assert.notStrictEqual(
    res.diffSet.filter(stats => stats.state !== 'equal'),
    []
  )
}

async function update() {
  await new Promise((resolve, reject) =>
    rimraf(current, err => (err ? reject(err) : resolve()))
  )
  await create(path.resolve(__dirname, '../templates/app'), prev)
}

process.argv[2] === '-u' ? update() : test()
