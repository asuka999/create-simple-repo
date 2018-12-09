module.exports = {
  extends: ['standard'],

  plugins: ['prettier'],

  rules: {
    'object-curly-spacing': ['error', 'never'],
    'space-before-function-paren': ['error', 'never'],
    'comma-dangle': ['error', 'always-multiline'],
    'prettier/prettier': ['error', require('./prettier.config')],

    // conflicts with prettier
    'no-extra-semi': 0,
  },
}
