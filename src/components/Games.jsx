import React from 'react'

const Games = (props) => {
    const {id,name,released,background_image:image,rating} = props.data;

  return (
    <>  
        <div className="games">
            <div className='games__container-images'><img className='games__image' src={image} alt={id} /></div>
            <div className="games__title">{name}</div>
            <div className="games__rating">{rating}⭐</div>
            <div className="games__relesead">{released}</div>
        </div>
    </>
  )
}

export default Games