import axios from 'axios'

//First, I make my instance of axios
const instance = axios.create({
  baseURL:'https://api.themoviedb.org/3'
})

export default instance