import React from 'react';

import Header from "./Header";
import randomCards from "../utils/randomCards";
import allCards from "../utils/cards";
import {numberIsSix} from "../utils/randomNumbersIsArray";
import Cards from './Cards'

const ChoiceNumberSix = () => {
    const cardsIsSix = randomCards(allCards, numberIsSix);

    return (
        <div>
            <Header main={false} text='Метод 52/6'/>
            <Cards cards={cardsIsSix}/>
        </div>
    );
};

export default ChoiceNumberSix;