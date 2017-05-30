import { FETCH_USERS, CHANGE_SORT } from '../actions/types'

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_USERS:
      const rankedCamperList = rankCampers(action.payload.data)
      return {
        sortRecent: true, 
        userList: rankedCamperList
      }
    case CHANGE_SORT:
      if (state.sortRecent === action.payload) {
        return state
      } else {
        let sortedCamperList
        if (action.payload === false) {
          sortedCamperList = sortCampers(state.userList, 'alltime')
        } else {
          sortedCamperList = sortCampers(state.userList, 'recent')
        }

        const rankedCamperList = rankCampers(sortedCamperList)
        return {
          sortRecent: action.payload,
          userList: rankedCamperList
        }
      }
    default:
      return state
  }
}

function rankCampers(sortedCamperList) {
  for (let i = 0; i < sortedCamperList.length; i++) {
    sortedCamperList[i].rank = i + 1
  }
  return sortedCamperList
} 

function sortCampers(unsortedCamperList, sortBy = 'recent') {
  return ( 
    unsortedCamperList.sort(function(a, b) {
    return parseInt(b[sortBy], 10) - parseInt(a[sortBy], 10)
    })
  )
}