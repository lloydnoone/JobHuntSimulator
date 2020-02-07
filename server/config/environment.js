const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/jobs'
const port = process.env.PORT || 8888
const secret = process.env.SECRET || 'Shhhh it\'s a secret'

module.exports = { dbURI, port, secret }