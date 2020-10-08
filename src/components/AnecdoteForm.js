import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { showNotification } from '../reducers/notificationReducer'
import { clearNotification } from '../reducers/notificationReducer'



const AnecdoteForm = () => {
  const dispatch = useDispatch()


  const handleSubmit = (e) => {
    e.preventDefault();
    const anecdote = e.target.anecdote.value;
    dispatch(addAnecdote(anecdote))
    dispatch(showNotification(anecdote))
    setTimeout(() => {
      dispatch(clearNotification())
    }, 5000)
    e.target.anecdote.value = ''

  }

    return (
      <div>
        <h2>create new</h2>
        <form onSubmit={handleSubmit}>
          <div><input name='anecdote'/></div>
          <button>create</button>
        </form>
      </div>
    )
  }

  export default AnecdoteForm;