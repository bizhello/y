const randomNumbersIsArray = (number: 6 | 9):number[] => {
    const arrNumbers:number[] = [];
    while(arrNumbers.length < number) {
        const num:number = Math.floor(Math.random() * 51) + 1;
        arrNumbers.every(n => n !== num) && arrNumbers.push(num)
    }
    return arrNumbers;
}
const numberIsSix = randomNumbersIsArray(6);

export default numberIsSix;