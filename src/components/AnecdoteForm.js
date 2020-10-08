import { useDispatch } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'



const HandleSubmit = (e) => {
    e.preventDefault();

    const dispatch = useDispatch()

    const anecdote = e.target.anecdote.value;
    dispatch(addAnecdote(anecdote))
    e.target.anecdote.value = ''
    console.log(anecdote)
  }

  export default HandleSubmit;