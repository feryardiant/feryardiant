module.exports = {
  extends: [
    'standard',
    'prettier',
    'plugin:import/recommended'
  ],
  plugins: ['prettier'],
  ignorePatterns: ['dist/', 'node_modules/', 'tests/', '*.old', '*.cjs'],
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true
    }
  },
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.cjs', '.mjs', '.ts', '.d.ts'] },
    },
  },
  rules: {
    'import/order': 'error',
    'import/first': 'error',
    'import/no-unresolved': 'off',
    'import/no-absolute-path': 'off',
    'no-unused-vars': 'off',
    'one-var': 'off'
  },
  overrides: [
    {
      files: ['*.cjs'],
      env: {
        commonjs: true
      }
    },
    {
      files: ['*.spec.js', '*.test.js', '*.spec.mjs', '*.test.mjs'],
      env: {
        mocha: true,
        jest: true
      }
    }
  ]
}
