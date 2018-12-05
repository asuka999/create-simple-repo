const exec = require('../helpers/exec')
const fs = require('../helper/fs')

module.exports = async function() {
  await exec('npm install --save-dev @babel/preset-env')
  const name = '.babelrc'
  if (await fs.exists(name)) {
    return
  }
  await fs.write(name, { presets: [[ "@babel/preset-env", { "useBuiltIns": false
      } ] ] }
  )
}
