import React, {useState} from 'react';

import Card from "./Card";
import '../styles/cards.css'
import ICard from "../interface/ICard";
import allCards from "../utils/cards"

const Cards = ({cards}:{cards: ICard[]}) => {
    const [cardItems, setCardItems] = useState(cards);

    const reloadCard = (id:number, index:number) => {
        let num:number = Math.floor(Math.random() * 51) + 1;
        let arr = cardItems.filter(item => item.id !== id);
        while (arr.some(item => item.id === num)) {
            num = Math.floor(Math.random() * 51) + 1;
        }
        const newCard = allCards.filter(item => item.id === num);
        arr.splice(index, 0, newCard[0])
        setCardItems(arr)
    }

    return (
        <div className='cards'>
             {cardItems.map((card, index) => (
                <Card key={index} index={index} id={card.id} src={card.src} name={card.name} reloadCard={reloadCard}/>
             ))}
        </div>
    );
};

export default Cards;