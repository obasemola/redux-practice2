import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getId } from './reducers/anecdoteReducer'

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const vote = (id) => {
    return {
      type: 'INCREMENT',
    }
  }

  const addAnecdote = (anecdote) => {
    return {
      type: 'ADD',
      data: {
        content: anecdote,
        id: getId(),
        votes: 0
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const anecdote = e.target.anecdote.value;
    dispatch(addAnecdote(anecdote))
    e.target.anecdote.value = ''
    console.log(anecdote)
  }



  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => dispatch(vote(anecdote.id))}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={handleSubmit}>
        <div><input name='anecdote'/></div>
        <button>create</button>
      </form>
    </div>
  )
}

export default App