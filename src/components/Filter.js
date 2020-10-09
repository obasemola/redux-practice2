import React from 'react';
import { useDispatch } from 'react-redux'
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

export default Filter