import React, { useState } from 'react'
import { Modal } from '@material-ui/core';
import './Movie.css';

function Movie({ title, imageSrc, overview, releaseDate, mediaType, rating }) {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleClick = movie => {
    //console.log(movie)

    setOpen(true)
  };
  return (  
    <>
    <Modal open={open} onClose={handleClose}>
      <>
      <h1>{title}</h1>
      <h1>{overview}</h1>
      <h1>{releaseDate}</h1>
      <h1>{mediaType}</h1>
      <h1>{rating}</h1>
      <img className='movie__modal__image'src={imageSrc}/>
      </>
    </Modal>

    <img 
      className={`movie__poster`}
      src={imageSrc} 
      alt={title}
      onClick={() => handleClick()}
    />   

    </>
  )
}

export default Movie
