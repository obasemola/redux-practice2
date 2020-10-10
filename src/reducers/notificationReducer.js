let clear = null;
export const setNotification = (notification, time) => {
  return dispatch => {

    dispatch({
      type: 'SHOW',
      notification,
    })

    if(clear){
      clearTimeout(clear)
    }

    clear = setTimeout(() => {
      dispatch({
        type: 'SHOW',
        notification: '',
      })
    }, time * 1000)
  }

}


const initialState = ''

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW':
      return action.notification

    default:
      return state
  }
}

export default notificationReducer