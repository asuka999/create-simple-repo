const exec = require('../helpers/exec')

module.exports = async function () {
  await exec('npm install --save-dev eslint eslint-config-standard eslint-plugin-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-node')
  await exec(`echo '{\n"extends": "standard"\n}\n' > .eslintrc`)
}
