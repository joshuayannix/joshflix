import React, { useState } from 'react'
import { Modal } from '@material-ui/core';
import './Movie.css';
import { Icon } from '@material-ui/core';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

function Movie({ title, imageSrc, overview, releaseDate, mediaType, rating, backdrop, name, firstAirDate }) {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleClick = movie => {
    //console.log(movie)

    setOpen(true)
  };
  return (<>
    <Modal open={open} onClose={handleClose} className='movie__modal'>
      <div className='movie__modal__container'>

        <img className='movie__modal__image'src={backdrop} alt='movie modal'/>

        <div className="movie__modal__titleSection">
          <div className='movie__modal__title'>{title ? title : name}</div>
          
        </div>
        <div className='movie__modal__details'>
      
          <div className="movie__modal__details__leftColumn">

            <div className="movie__modal__buttons">

              <button id='play'><Icon><PlayArrowIcon/></Icon>Play</button>

              <button><Icon><ThumbUpIcon/></Icon></button>
              
              <button><Icon><ThumbDownIcon/></Icon></button>              
              
            </div>

            <div className='movie__modal__description'>
              <div>Released: {releaseDate ? releaseDate : firstAirDate}</div>
                <div>Type: {mediaType ? 'Movie': 'TV'}</div>
                <div>Rating: {rating}</div>      
              </div>
            </div>
            
          <div className="movie__modal__details__rightColumn">
            

            <div>{overview}</div>
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

  </>)
}

export default Movie
