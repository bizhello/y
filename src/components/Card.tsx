import React from 'react';

import ICard from '../interface/ICard';
import '../styles/card.css'

interface IProps extends ICard {
    index: number;
    reloadCard: any;
}

const Card = ({src, name, id, index, reloadCard}: IProps) => {

    const handelReload = ()=> {
        reloadCard(id, index);
    }
    return (
        <div className='card'>
            <img className='card__image' src={src} alt={name}/>
            <p className='card__title'>{name}</p>
            <button className='card__button' onClick={handelReload}></button>
        </div>
    );
};

export default Card;