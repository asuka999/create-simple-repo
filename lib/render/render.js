const exec = require('../../helpers/exec')

module.exports = async function(target, dest) {
  await exec(`cp -R ${target} ${dest}`)
}
