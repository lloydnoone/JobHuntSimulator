const router = require('express').Router()
const jobs = require('../controllers/jobs')
const users = require('../controllers/auth')
const secureRoute = require('../lib/secureRoute')

router.route('/jobs/:title/:location')
  .get(jobs.index)

router.route('/register')
  .post(users.register)

router.route('/register')
  .post(users.register)

router.route('/login')
  .post(users.login)

router.route('/profile')
  .get(secureRoute, users.profile)

router.route('/users/jobs')
  .post(secureRoute, jobs.jobCreate)

module.exports = router
