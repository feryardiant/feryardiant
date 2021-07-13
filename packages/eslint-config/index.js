module.exports = {
  extends: ['standard', 'prettier'],
  plugins: ['prettier'],
  ignorePatterns: ['dist/**', 'node_modules/', 'tests/**', '**.old', '**.cjs', '**.mjs'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        ...require('prettier-config-standard'),
        printWidth: 120
      }
    ],
    'no-unused-vars': 0,
    'one-var': 0
  }
}
