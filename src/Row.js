import React, {useEffect, useState} from 'react'
import axios from './axios'
import './Row.css'

const Row = ({title, fetchUrl, isLargeRow=false}) => {

  const [movie, setMovie] = useState([])

  const base_url = "https://image.tmdb.org/t/p/original/"

  useEffect(() => {
    async function fetchData(){
      const request  = await axios.get(fetchUrl)
      setMovie(request.data.results)
      return request
    }
    fetchData()
  }, [fetchUrl])

  console.log(movie)

  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className="row__posters">

      {movie.map((m)=>{
        
        return <img 
                    className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
                     key={m.id}
                    src={`${base_url}${  isLargeRow ?  m.poster_path : m.backdrop_path}`} 
                    alt={m.name} />
      })}

      </div>


    </div>
  )
}

export default Row
