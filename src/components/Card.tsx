import React from 'react';

import '../styles/card.css'

const Card = ({src}:{src:string}) => {
    return (
        <div className='card'>
            <img className='card__image' src={src}/>
        </div>
    );
};

export default Card;