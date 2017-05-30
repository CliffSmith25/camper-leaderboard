import {combineReducers } from 'redux'

import listReducer from './list-reducer'

const rootReducer = combineReducers({
  state: listReducer
})

export default rootReducer