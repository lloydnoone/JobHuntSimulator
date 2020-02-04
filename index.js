require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const router = require('./config/router')
const logger = require('./lib/logger')
const { port } = require('./config/environment')

app.use(express.static(`${__dirname}/dist`))

app.use(bodyParser.json())

app.use(logger)

app.use('/api', router)

app.get('/*', (req, res) => res.status(404).json({ message: 'Not Found' }))

app.listen(port, () => console.log(`server listening on port ${port}`))

module.exports = app