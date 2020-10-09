import React from 'react'
import { useDispatch } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { showNotification } from '../reducers/notificationReducer'
import { clearNotification } from '../reducers/notificationReducer'
import { createAnecdote } from '../services/anecdotes'



const AnecdoteForm = () => {
  const dispatch = useDispatch()


  const handleSubmit = async (e) => {
    e.preventDefault();
    const content = e.target.anecdote.value;
    e.target.anecdote.value = ''
    const anecdote = {
      content,
      votes: 0
    }
    const newAnecdote = await createAnecdote(anecdote)
    dispatch(addAnecdote(newAnecdote))
    dispatch(showNotification(content))
    setTimeout(() => {
      dispatch(clearNotification())
    }, 5000)


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