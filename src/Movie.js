import React, {useState, useEffect} from 'react'
import { Modal } from '@material-ui/core';
import './Movie.css';

function Movie({ title, imageSrc }) {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleClick = movie => {
    //console.log(movie)

    setOpen(true)
  };
  return (  
    <img 
      className={`movie__poster`}
      src={imageSrc} 
      alt={title}
      onClick={() => handleClick()}
    />   
  )
}

export default Movie
