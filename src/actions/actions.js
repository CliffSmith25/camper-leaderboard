import axios from 'axios'

import { FETCH_USERS, CHANGE_SORT } from './types'

export function changeSort(sortByRecent) {
  return {
    type: CHANGE_SORT,
    payload: sortByRecent
  }
}

export function fetchUsers() {
  const request = axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
  return {
    type: FETCH_USERS,
    payload: request
  }
}