import React from 'react'

import Dropdown from './Dropdown'

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log('search bar render')
    return (
      <div className="searchBar">
        <Dropdown location={this.props.location} onClick={(e) => this.props.handleChange(e)} />
        <input data-name="title" placeholder="Job Title..." onChange={this.props.handleChange} />
        <input className='salaryInput' data-name="minSalary" placeholder='Minimum Salary' onChange={this.props.handleChange} type='number' min='10000' max='100000'/>
        <input className='salaryInput' data-name="maxSalary" placeholder='Maximum Salary' onChange={this.props.handleChange} type='number' min='10000' max='100000'/>
        <button className="button" onClick={this.props.submitSearch}>Search</button>
      </div>
    )
  }
}

export default SearchBar