#!/usr/bin/env node

const { readFileSync } = require('fs')
const { resolve } = require('path')

process.on('unhandledRejection', (err) => {
	console.error('Unhandled Rejection:', err.message)
	process.exit(1)
})

try {
  const changelogFile = readFileSync(resolve(process.cwd(), 'CHANGELOG.md'))

  require('./index')(changelogFile.toString()).catch(err => {
    throw err
  })
} catch (e) {
  if (e.code === 'ENOENT') {
    console.error('Error: Could not find CHANGELOG.md file in', process.cwd())
  } else {
    process.stderr.write(e)
  }

  process.exit(1)
}
