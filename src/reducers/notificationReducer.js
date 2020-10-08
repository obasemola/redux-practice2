export const showNotification = (notification) => {
  return {
    type: 'SHOW',
    notification
  }
}

export const clearNotification = () => {
  return {
    type: 'CLEAR',
  }
}

const initialState = ''

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW':
      return action.notification

    case 'CLEAR':
      return ''

    default:
      return state
  }
}

export default notificationReducer