import React from 'react'
import { useDispatch, connect } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'


const AnecdoteList = (props) => {
  const anecdotes = () => {
    if(props.filter === ''){
      return props.anecdotes
    } else{
      return props.anecdotes.filter((anecdote) => {
        return anecdote.content.toLowerCase().includes(props.filter.toLowerCase())
      })
    }
  }

  const anecdotesToShow = anecdotes().sort((a, b) => {
    return b.votes - a.votes
  })

  



  const dispatch = useDispatch()
  const handleVote = (e) => {
    let clear = null;
    const id = e.target.id;
    const anecdote = e.target.name
    const oldAnecdote = anecdotesToShow.find((anecdote) => {
      return id === anecdote.id
    })

    const toBeUpdatedAnecdote = {
      ...oldAnecdote,
      votes: oldAnecdote.votes + 1
    }

    if(clear){
      clearTimeout(clear)
    }

    dispatch(vote(id, toBeUpdatedAnecdote))
    clear = dispatch(setNotification(`you voted ${anecdote}`, 5))
  }

  return (
    <div>
      {anecdotesToShow.map(anecdote =>
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