import ICard from '../interface/ICard'

const randomCards = (cards:ICard[], idNumbers:number[]): ICard[] => {
    const newCards: ICard[] = []
    idNumbers.forEach(num => cards.map(card => card.id === num && newCards.push(card)));

    return newCards;
}

export default randomCards;
