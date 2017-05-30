import React, { Component } from 'react'
import { connect } from 'react-redux'

import Leader from './leader'
import * as actions from '../actions/actions'

class LeaderBoard extends Component {
  componentWillMount() {
    this.props.fetchUsers()
  }

  render() {
    if(!this.props.userList) {
      return (
        <div>
          Loading Campers...
        </div>
      )
    }

    return (
      <div className='leader-board'>
        <table className='leader-table'>
          <thead className='leader-table-header'>
            <tr key='leaderboard-header-row'>
              <th className='rank'>#</th>
              <th className='user-image'></th>
              <th className='user-name'>Camper Name</th>
              <th className='recent-points' onClick={() => this.fireSort(true)}>Points in past 30 Days {(this.props.sortRecent ? String.fromCharCode(8595) : '')}</th>
              <th className='all-time-points' onClick={() => this.fireSort(false)}>All time points {(this.props.sortRecent ? '' : String.fromCharCode(8595))}</th>
            </tr>
          </thead>
          <tbody>
            {this.props.userList.map(this.renderUser)}
          </tbody>
        </table>  
      </div>
    )
  }

  fireSort(sortByRecent) {
    return this.props.changeSort(sortByRecent)
  }

  renderUser(user) {
    return(
      <Leader 
        username={user.username}
        key={user.username}
        rank={user.rank}
        imageURL={user.img}
        recent={user.recent}
        alltime={user.alltime} />
    )
  }
}

function mapStateToProps(state) {
  return {
    userList: state.state.userList,
    sortRecent: state.state.sortRecent
  }
}

export default connect(mapStateToProps, actions)(LeaderBoard)