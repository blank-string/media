const mustache = require('mustache')
const fs = require('fs')
const path = require('path')

const filename = path.resolve(__dirname, 'index.html')
const template = fs.readFileSync(filename).toString()

const media = path.resolve(__dirname, 'media')

const list = fs.readdirSync(media).map(file => {
    return `<li><a href="./${file}">${file}</a></li>`
}).join('\n')

const result = mustache.render(template, {list})

const output = path.resolve(media, 'index.html')

fs.writeFileSync(output, result)