import React from 'react'
import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'
import Notification from '../src/components/Notification'
import { useSelector } from 'react-redux'

const App = () => {

  const notification = useSelector(state => state.notifications)


  return (
    <div>
      <h2>Anecdotes</h2>
      {notification && <Notification/>}
      <AnecdoteList/>
      <AnecdoteForm/>
    </div>
  )
}

export default App