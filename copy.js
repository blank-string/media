const path = require('path')
const fs = require('fs-extra')
const data = require('@blank-string/data')
const chalk = require('chalk')

const owncloud = process.env.OWNCLOUD
const episodes = path.resolve(owncloud, 'blankstring/episodes')
const output = path.resolve(__dirname, 'media')

const names = data.map(d => d.name)

fs.removeSync(output)

const files = fs.readdirSync(episodes)
    .filter(episode => names.includes(episode))
    .forEach(episode => {
        const dir = path.resolve(episodes, episode)
        const src = path.resolve(dir, `blankstring-${episode}.mp3`)
        const dest = path.resolve(output, `${episode}.mp3`)
        fs.copySync(src, dest)
        console.log(
            chalk.yellow('copied'),
            chalk.blueBright.underline(src),
            chalk.yellow('to'),
            chalk.blueBright.underline(dest)
        )
    })
