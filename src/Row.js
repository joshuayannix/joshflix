import React, { useState, useEffect } from 'react'
import axios from './axios';
import { Modal } from '@material-ui/core';
import './Row.css';
import movieTrailer from 'movie-trailer';

const base_url = 'https://image.tmdb.org/t/p/original/';

function Row({ title, fetchUrl, isLargeRow }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      console.log(request)

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

  const handleClick = movie => {
    setOpen(true)
  };

  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map(movie => (
          <img 
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
            alt={movie.name}
          />
        ))}
      </div>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <h1>WORKING!!</h1>
      </Modal>
    </div>
  )
}

export default Row
