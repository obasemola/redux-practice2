import React from 'react'
import { useSelector, useDispatch, connect } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'


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
    const oldAnecdote = anecdotes.find((anecdote) => {
      return id === anecdote.id
    })

    const toBeUpdatedAnecdote = {
      ...oldAnecdote,
      votes: oldAnecdote.votes + 1
    }

    dispatch(vote(id, toBeUpdatedAnecdote))
    dispatch(setNotification(`you voted ${anecdote}`, 5))
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

const mapStateToProps = (state) => {
  // checking the state of the application
  console.log(state)
  return {
    anecdotes: state.anecdotes,
    filter: state.filter
  }
}

const ConnectedAnecdotes = connect(mapStateToProps)(AnecdoteList)

export default ConnectedAnecdotes