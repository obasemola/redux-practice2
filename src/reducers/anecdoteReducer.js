export const vote = (id) => {
  return {
    type: 'INCREMENT',
    id
  }
}

export const addAnecdote = (data) => {
  return {
    type: 'ADD',
    data: data
  }
}

export const initAnecdotes = (data) => {
  return {
    type: 'INIT',
    data
  }
}

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state.map((el) => {
        if (el.id === action.id) {
          return {
            ...el,
            votes: el.votes + 1
          }
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