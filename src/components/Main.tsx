import React  from 'react';
import {Box, Image, Stack} from '@chakra-ui/react'
import Cards from "../utils/cards";
import numberIsSix from './../utils/randomNumbersIsArray'
import randomCards from './../utils/randomCards'

const Main = () => {

    const cards = randomCards(Cards, numberIsSix);

    return (
        <Box boxSize='sm'>
            <Stack direction='row'>
            {
                cards.map((card, index) => (
                    <Image key={index} boxSize='250px' objectFit='contain' src={card.src} />
                ))
            }
            </Stack>
        </Box>
    );
};

export default Main;
