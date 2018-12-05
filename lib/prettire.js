
const exec = require('../helpers/exec')

module.exports = async function () {
  await exec('npm install --save-dev --save-exact prettier')
}
