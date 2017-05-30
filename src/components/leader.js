import React from 'react'

export default (props) => {

  return (
    <tr id={props.username}>
      <td className='rank'>{props.rank}</td>
      <td className='user-image'><img alt={props.username}src={props.imageURL} /></td>
      <td className='user-name'>{props.username}</td>
      <td className='recent-points'>{props.recent}</td>
      <td className='all-time-points'>{props.alltime}</td>
    </tr>
  )
}
