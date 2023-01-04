import React from 'react';

import Card from "./Card";
import '../styles/cards.css'
import ICard from "../interface/interface";

const Cards = ({cards}:{cards: ICard[]}) => {
    return (
        <div className='cards'>
             {cards.map((card, index) => (
                <Card key={index} src={card.src} name={card.name}/>
             ))}
        </div>
    );
};

export default Cards;