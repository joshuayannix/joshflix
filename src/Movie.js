import React, { useState } from 'react'
import { Modal } from '@material-ui/core';
import './Movie.css';

function Movie({ title, imageSrc, overview, releaseDate, mediaType, rating, backdrop, name, firstAirDate }) {
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

        <img className='movie__modal__image'src={backdrop}/>

        <div className="movie__modal__titleSection">
          <div className='movie__modal__title'>{title ? title : name}</div>

        </div>
        <div className='movie__modal__details'>
      
          <div className="movie__modal__details__leftColumn">
            <div>{overview}</div>            
          </div>

          <div className="movie__modal__details__rightColumn">
            <div>Released: {releaseDate ? releaseDate : firstAirDate}</div>
            <div>Type: {mediaType ? 'Movie': 'TV'}</div>
            <div>Rating: {rating}</div>
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
