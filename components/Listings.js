import React from 'react'
import axios from 'axios'

import localAuth from '../lib/localAuth'

import Listing from './Listing'

class Listings extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      detailsDisplay: true,
      jobIds: []
    }
    this.saveId = this.saveId.bind(this)
  }

  componentDidMount() {
    if (localAuth.isAuthenticated()) {
      axios.get('api/profile', { headers: { Authorization: `Bearer ${localAuth.getToken()}` } })
        .then((res) => {
          const jobIdsArr = res.data.jobs.map(job => {
            return job.jobBoardId
          })
          this.setState({ jobIds: jobIdsArr })
        })
        .catch(err => console.log('error: ', err))
    }
    
  }

  saveId(e, jobId) {
    e.preventDefault()
    axios.post('/api/users/jobs', { jobBoardId: jobId }, { //attaches job to currently logged in user
      headers: { Authorization: `Bearer ${localAuth.getToken()}` }
    })
      .then((res) => {
        const jobIdsArr = res.data.jobs.map(job => {
          return job.jobBoardId
        })
        this.setState({ jobIds: jobIdsArr })
      })
      .catch(err => console.log('error: ', err))
  }

  render() {
    return (
      <div className="listings">
        {this.props.jobs.jobsArray
          .filter((job) => {
            if (!this.props.minSalary && !this.props.maxSalary) return true
            if (job.minSalary >= parseInt(this.props.minSalary) && !this.props.maxSalary) return true
            if (job.maxSalary <= parseInt(this.props.maxSalary) && !this.props.minSalary) return true
            return job.minSalary >= parseInt(this.props.minSalary) && job.maxSalary <= parseInt(this.props.maxSalary)
          })
          .map(job => {
            return <Listing 
              key={job.id} 
              job={job} 
              applied={this.state.jobIds.includes(job.id)}
              saveId={this.saveId}
            />
          })
        }
      </div>
    )
  }
}

export default Listings