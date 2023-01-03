import React from 'react';

import '../styles/cardForChoice.css'
interface ICardForChoice {
    src: string
    text: string
}
const CardForChoice = ({src, text}:ICardForChoice) => {
    return (
        <div className='cardForChoice'>
            <h4 className='cardForChoice__text'>Метод 52/{text}</h4>
            <img className='cardForChoice__image' src={src}/>
            <p className='cardForChoice__choice'>Выбрать тренировку</p>
        </div>
    );
};

export default CardForChoice;