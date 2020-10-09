import { getAll, createAnecdote, updateAnecdote } from "../services/anecdotes"

export const vote = (id, toBeUpdatedAnecdote) => {
  return async dispatch => {
    const updatedAnecdote = await updateAnecdote(id, toBeUpdatedAnecdote)
    dispatch({
      type: 'INCREMENT',
      id,
      data: updatedAnecdote
    })
  }

}

export const addAnecdote = (anecdote) => {
  return async dispatch => {
    const newAnecdote = await createAnecdote(anecdote)
    dispatch({
      type: 'ADD',
      data: newAnecdote
    })
  }

}

export const initAnecdotes = () => {
  return async dispatch => {
    const notes = await getAll()
    dispatch(  {
      type: 'INIT',
      data: notes
    })
  }

}

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state.map((el) => {
        if (el.id === action.id) {
          return action.data
        } else {
          return el
        }
      })

    
    case 'ADD':
      return state.concat(action.data)

    case 'INIT':
      return state.concat(action.data)
    
    default:
        return state
  }
}

export default reducer