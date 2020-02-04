const router = require('express').Router()
const jobs = require('../controllers/jobs')

router.route('/jobs/:title/:location')
  .get(jobs.index)
  //.post(secureRoute, cigars.create)

// router.route('/cigars/:id')
//   .get(cigars.show)
//   .delete(secureRoute, cigars.destroy)
//   .put(secureRoute, cigars.update)

// router.route('/cigars/:id/comments')
//   .get(cigars.commentShow)
//   .post(secureRoute, cigars.commentCreate)

// router.route('/cigars/:id/comments/:commentId')
//   .delete(secureRoute, cigars.commentDelete)

// router.route('/register')
//   .post(users.register)

// router.route('/login')
//   .post(users.login)

// router.route('/profile')
//   .get(secureRoute, users.profile)

module.exports = router
