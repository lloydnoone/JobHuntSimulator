const axios = require('axios')

function index(req, res) {
  axios.all([
    axios.get(`http://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=${process.env.AZID}&app_key=${process.env.AZKEY}&results_per_page=20&what=${req.params.title}&where=${req.params.location}&content-type=application/json`), //what=javascript%20developer need to regex this
    axios.get(`https://jobs.github.com/positions.json?description=${req.params.title}&location=${req.params.location}`), //&location=new+york need to regex this
    axios.get(`https://www.reed.co.uk/api/1.0/search?keywords=${req.params.title}&locationName=${req.params.location}`, {
      withCredentials: true,
      auth: {
        username: process.env.REEDUSER,
        password: ''
      }
    })
  ])
    .then(axios.spread((adzunaRes, githubRes, reedRes) => {
      const adzunaData = adzunaRes.data.results.map(job => {
        return ({
          id: job.id,
          title: job.title,
          location: job.location.display_name,
          company: job.company.display_name,
          minSalary: job.salary_min,
          maxSalary: job.salary_max,
          description: job.description,
          url: job.redirect_url 
        })
      })

      const githubData = githubRes.data.map(job => {
        return ({
          id: job.id,
          title: job.title,
          location: job.location,
          company: job.company,
          minSalary: 'not',
          maxSalary: 'specified',
          description: job.description,
          url: job.company_url
        })
      })

      const reedData = reedRes.data.results.map(job => {
        return ({
          id: job.jobId,
          title: job.jobTitle,
          location: job.locationName,
          company: job.employerName,
          minSalary: job.minimumSalary,
          maxSalary: job.maximumSalary,
          description: job.jobDescription,
          url: job.jobUrl
        })
      })
      const jobsArray = [ ...adzunaData, ...githubData, ...reedData ]
      const jobsData = { jobsArray }
      res.status(200).send(jobsData)
    }))
    .catch(err => res.status(400).json(err))
}

module.exports = {
  index
}