require('./copy')
const ghpages = require('gh-pages')
const path = require('path')
const chalk = require('chalk')
 
ghpages.publish('media', err => console.error(chalk.redBright(err)))