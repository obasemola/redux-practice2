import React from 'react';
import { useDispatch, connect } from 'react-redux'
import { searchText } from '../reducers/filterReducer'


const Filter = () => {
  const dispatch = useDispatch()

  const handleChange = (e) => {
    const text = e.target.value;
    dispatch(searchText(text))
  }

  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange}/>
    </div>
  )
}

const connectedFilter = connect()(Filter)

export default connectedFilter