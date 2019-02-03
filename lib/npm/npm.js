const packageJSON = require('../../helpers/packageJSON')
const exec = require('../../helpers/exec')

module.exports = async function() {
  if (await packageJSON.exists()) {
    return
  }
  await exec('npm init -y')
}
