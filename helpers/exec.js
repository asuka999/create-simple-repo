const originExec = require('child_process').exec

module.exports = function exec(command) {
  return new Promise((resolve, reject) => {
    originExec(command, (error, stdout, stderr) => {
      if (error) {
        console.log(`exec ${command} failed, reason:`, error)
        reject(error)
        return
      }
      console.log(`stdout: ${stdout}`)
      console.log(`stderr: ${stderr}`)
      resolve()
    })
  })
}
