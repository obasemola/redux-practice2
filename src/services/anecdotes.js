import axios from 'axios';

const baseUrl = 'http://localhost:3006/anecdotes';

export const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data
}

export const createAnecdote = async (newAnecdote) => {
  const response = await axios.post(baseUrl, newAnecdote)

  return response.data
}