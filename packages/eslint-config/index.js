module.exports = {
  extends: ['standard', 'prettier'],
  plugins: ['prettier'],
  ignorePatterns: ['dist/', 'node_modules/', 'tests/', '**.old', '**.cjs', '**.mjs'],
  env: {
    es6: true,
    browser: true,
    node: true
  },
  rules: {
    'no-unused-vars': 0,
    'one-var': 0
  },
  overrides: [
    {
      files: ['*.spec.js'],
      env: {
        mocha: true
      }
    }
  ]
}
