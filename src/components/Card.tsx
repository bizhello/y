import React from 'react';

import '../styles/card.css'

const Card = ({src, name}:{src:string, name: string}) => {
    return (
        <div className='card'>
            <img className='card__image' src={src}/>
            <p className='card__title'>{name}</p>
            <button className='card__button'></button>
        </div>
    );
};

export default Card;