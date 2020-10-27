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
    <Modal open={open} onClose={handleClose} className='movie__modal'>
      <div className='movie__modal__container'>

        <img className='movie__modal__image'src={imageSrc}/>

        <div className='movie__modal__details'>

          <div className="movie__modal__details__leftColumn">
            <div>{overview}</div>            
          </div>

          <div className="movie__modal__details__rightColumn">
            <div>{releaseDate}</div>
            <div>{mediaType}</div>
            <div>{rating}</div>
          </div>

        </div>     

      </div>
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
