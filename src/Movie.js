import React, { useState } from 'react'
import { Modal } from '@material-ui/core';
import { v4 as uuid } from 'uuid';
import './Movie.css';
import { Icon } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { useDispatch } from 'react-redux';
import { addToCart } from './features/cartSlice';

function Movie({ title, moviePoster, imageSrc, overview, releaseDate, mediaType, rating, backdrop, name, firstAirDate }) {
  const dispatch = useDispatch();
  const addToList = () => {
    dispatch(addToCart({
      item: {title, moviePoster, name, uuid:uuid()}
    }))
  }

  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleClick = movie => {
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

              <button 
                id='add'
                onClick={addToList}
              >
                <Icon id='add-icon'>
                  <AddCircleIcon />
                </Icon>
                Add to My List              
              </button>                          
            
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
