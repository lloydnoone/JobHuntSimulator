const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/jobs'
const port = process.env.PORT || 4000
const secret = process.env.SECRET || 'Shhhh it\'s a secret'

module.exports = { dbURI, port, secret }