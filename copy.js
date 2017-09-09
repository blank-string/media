const path = require('path')
const fs = require('fs-extra')
const data = require('@blank-string/data')
const chalk = require('chalk')

const owncloud = process.env.OWNCLOUD
if (typeof owncloud === 'undefined') {
    console.log(chalk.red('you need to add OWNCLOUD to your variables\n\n'))
    process.exit(1)
}

const episodes = path.resolve(owncloud, 'blankstring/episodes')
const output = path.resolve(__dirname, 'media')

const names = data.map(d => d.name)

const files = fs.readdirSync(episodes)
    .filter(episode => names.includes(episode))
    .forEach(episode => {
        const dir = path.resolve(episodes, episode)
        const src = path.resolve(dir, `blankstring-${episode}.mp3`)
        const dest = path.resolve(output, `${episode}.mp3`)
        if (!fs.existsSync(dest)) {
            fs.copySync(src, dest)
            console.log(
                chalk.yellow('copied'),
                chalk.blueBright.underline(src),
                chalk.yellow('to'),
                chalk.blueBright.underline(dest)
            )
        } else {
            console.log(
                chalk.yellow('skipping'),
                chalk.blueBright.underline(dest)
            )
        }
    })
