import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import anecdotesReducer from '../reducers/anecdoteReducer'
import notificationReducer from '../reducers/notificationReducer'
import filterReducer from '../reducers/filterReducer'

const reducer = combineReducers({
  anecdotes: anecdotesReducer,
  notifications: notificationReducer,
  filters: filterReducer
})


const store = createStore(
  reducer,
  composeWithDevTools())

export default store