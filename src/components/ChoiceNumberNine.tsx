import React from 'react';

import Header from "./Header";
import randomCards from "../utils/randomCards";
import allCards from "../utils/cards";
import {numberIsNine} from "../utils/randomNumbersIsArray";
import Cards from './Cards'

const ChoiceNumberNine = () => {
    const cardsIsNine = randomCards(allCards, numberIsNine);

    return (
        <div>
            <Header main={false} text='Метод 52/9'/>
            <Cards cards={cardsIsNine}/>
        </div>
    );
};

export default ChoiceNumberNine;