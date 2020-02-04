import React from 'react'

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
    const jobIds = JSON.parse(localStorage.getItem('jobIds')) || []
    this.setState({ jobIds: [...jobIds] })
  }

  saveId(jobId) {
    const jobIds = JSON.parse(localStorage.getItem('jobIds')) || []
    this.setState({ jobIds: [...jobIds, jobId] })
    localStorage.setItem('jobIds', JSON.stringify([...jobIds, jobId]))
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

//`.details ${this.state.detailsDisplay ? '.detailsOpen' : ''}`