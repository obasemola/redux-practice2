import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'
import Notification from '../src/components/Notification'
import Filter from '../src/components/Filter'
import { initAnecdotes } from './reducers/anecdoteReducer'

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initAnecdotes())
  },[dispatch])

  const notification = useSelector(state => state.notifications)


  return (
    <div>
    <Filter/>
      <h2>Anecdotes</h2>
      {notification && <Notification/>}
      <AnecdoteList/>
      <AnecdoteForm/>
    </div>
  )
}

export default App