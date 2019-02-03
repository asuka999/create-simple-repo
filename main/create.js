
const render = require('../lib/render')
const npm = require('../lib/npm')
const git = require('../lib/git')
const eslint = require('../lib/eslint')
const prettier = require('../lib/prettier')
const babel = require('../lib/babel')

module.exports = async function generator(target, name) {
  await render(target, name)
  process.chdir(name)
  await npm()
  await git()
  await prettier()
  await eslint()
  await babel()
  process.chdir('../')
}
