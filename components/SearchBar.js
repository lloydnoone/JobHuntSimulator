import React from 'react'
import axios from 'axios'

import localAuth from '../lib/localAuth'

import Dropdown from './Dropdown'

class SearchBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }

    this.handleLoginChange = this.handleLoginChange.bind(this)
  }

  handleLoginChange(e) {
    this.setState({ [e.target.dataset.name]: (e.target.value || e.target.innerHTML) })
  }

  handleSubmitLogin(e) {
    e.preventDefault()
    axios.post('/api/login', { email: 'lloyd@email.com', password: 'pass'
    })
      .then(res => {
        localAuth.setToken(res.data.token)
      })
      .catch(err => console.log(err.message))
  }

  render() {
    console.log('search bar state: ', this.state)
    return (
      <div className='searchBar'>
        <div className='jobSearch'>
          <Dropdown location={this.props.location} onClick={(e) => this.props.handleChange(e)} />
          <input data-name="title" placeholder="Job Title..." onChange={this.props.handleChange} />
          <input className='salaryInput' data-name="minSalary" placeholder='Minimum Salary' onChange={this.props.handleChange} type='number' min='10000' max='100000' />
          <input className='salaryInput' data-name="maxSalary" placeholder='Maximum Salary' onChange={this.props.handleChange} type='number' min='10000' max='100000' />
          <button className="button" onClick={this.props.submitSearch}>Search</button>
        </div>
        <div className='login'>
          <input className='salaryInput' data-name="email" placeholder='Email' onChange={this.handleLoginChange} type='email' autoComplete='new-password' />
          <input className='salaryInput' data-name="password" placeholder='Password' onChange={this.handleLoginChange} type='password' autoComplete='new-password' />
          <button className="button" onClick={this.handleSubmitLogin}>Login</button>
        </div>
      </div>
    )
  }
}

export default SearchBar