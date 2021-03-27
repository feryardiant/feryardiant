/**
 * Read Changelog
 *
 * @param {String} changelog
 */
module.exports = async (changelog) => {
  const changes = changelog.split('\n')
  const regex = /^(###?).(?<version>\[?[0-9]\.[0-9]\.[0-9]\]?).\((.*)\)$/

  const [curr, prev] = changes.filter(line => regex.test(line)).slice(0, 2).map(line => {
      const index = changes.findIndex(text => text === line)
      const match = line.match(/\((?<link>https?\:.*)\)./)

      return { index, line, compare: match ? match.groups.link : null }
  })

  console.info(changes.slice(curr.index + 1, prev ? prev.index : undefined).join('\n').trim())

  if (undefined !== prev) {
    console.info('\n---\n')
    console.info('Compare with previous version:', curr.compare)
  }
}

