#!/usr/bin/env node

require('./copy')
require('./render')
const serve = require('serve')
const detect = require('detect-port')
const chalk = require('chalk')
const path = require('path')

const port = process.argv[2] || 4567

detect(port)
    .then(_port => {
        const sport = port == _port ? port : _port
        const server = serve(path.resolve(__dirname, 'media'), {
            port: sport
        })
    })
    .catch(err => {
        console.log(chalk.redBright(err))
    })