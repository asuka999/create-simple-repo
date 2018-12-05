const eslint = require('./lib/eslint')

const dir = process.env.TEMPLATE || 'app'

module.exports = {
  templateDir: `./${dir}`,

  actions() {
    return [
      {
        type: 'add',
        files: '**',
        filters: {
          // kopy 没有识别排除 .gitignore 中的目录（开发中需要这样，npm registry 中不需要）
          'coverage/**': false,
        },
      },
      {
        type: 'move',
        patterns: {
          gitignore: '.gitignore',
        },
      },
    ]
  },

  // TODO: skip prompts
  prompts() {
    return [
      {
        name: 'name',
        message: 'Type the name',
        default: this.outFolder,
      },
    ]
  },

  async completed() {
    this.gitInit()
    await eslint()
    // await this.npmInstall() ({packages: devDeps, saveDev: true})
    this.showProjectTips()
  },
}
