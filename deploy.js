require('./render')
const ghpages = require('gh-pages')
const path = require('path')
const chalk = require('chalk')

console.log(chalk.blueBright('deploying ...'))

ghpages.publish('media', err => {
    if (err) {
        console.error(chalk.redBright(err))
        process.exit(1)
    }
    else console.log(chalk.blueBright('deployed'))
})