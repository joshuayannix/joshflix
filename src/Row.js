import React, { useState, useEffect } from 'react'
import axios from './axios';
import './Row.css';
import Movie from './Movie';

const base_url = 'https://image.tmdb.org/t/p/original/';

function Row({ title, fetchUrl, isLargeRow }) {


  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      //console.log(request)
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1
    },
  };



  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map(movie => (
          
          /* <img 
            key={movie.id}
            className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
            alt={movie.name}
          /> */
          <Movie 
            key={movie.id}
            title={movie.name}           
            imageSrc={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
          />
          
        ))}
      </div>
      
    </div>
  )
}

export default Row
