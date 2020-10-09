export const searchText = (text) => {
  return {
    type: 'FILTER',
    text
  }
}

const initialState = '';

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FILTER':
      return action.text

    default:
      return state
  }
}


export default filterReducer