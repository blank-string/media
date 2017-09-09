#!/usr/bin/env node

require('./copy')
const http = require('http')
const serveStatic = require('serve-static')
const detect = require('detect-port')
const chalk = require('chalk')

var serve = serveStatic('media')

var server = http.createServer((req, res) => {
    serve(req, res, () => { })
})

const port = process.argv[2] || 4567

detect(port)
    .then(_port => {
        const sport = port == _port ? port : _port
        server.listen(sport)
        console.log(
            'started serving on',
            chalk.blueBright.underline(`http://localhost:${sport}`)
        )
    })
    .catch(err => {
        console.log(chalk.redBright(err))
    })