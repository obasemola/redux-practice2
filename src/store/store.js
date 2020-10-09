import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import anecdotesReducer from '../reducers/anecdoteReducer'
import notificationReducer from '../reducers/notificationReducer'
import filterReducer from '../reducers/filterReducer'

const reducer = combineReducers({
  anecdotes: anecdotesReducer,
  notifications: notificationReducer,
  filter: filterReducer
})


const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware()
  ))

export default store