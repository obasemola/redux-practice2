import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { showNotification } from '../reducers/notificationReducer'
import { clearNotification } from '../reducers/notificationReducer'


const AnecdoteList = () => {
  const anecdotes = useSelector(state => {
    if(state.filter === ''){
      return state.anecdotes
    } else{
      return state.anecdotes.filter((anecdote) => {
        return anecdote.content.toLowerCase().includes(state.filter.toLowerCase())
      })
    }
  }).sort((a, b) => {
    return b.votes - a.votes
  })


  const dispatch = useDispatch()
  const handleVote = (e) => {
    const id = e.target.id;
    const anecdote = e.target.name
    dispatch(vote(id))
    dispatch(showNotification(anecdote))
    setTimeout(() => {
      dispatch(clearNotification())
    }, 5000)
  }

  return (
    <div>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button name={anecdote.content} id={anecdote.id} onClick={handleVote}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList