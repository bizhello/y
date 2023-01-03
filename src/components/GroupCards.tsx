import React from 'react';
import '../styles/groupCards.css'

import { NavLink } from "react-router-dom";

import CardForChoice from "./CardForChoice";

const GroupCards = () => {
    return (
        <div className='groupCards'>
            <NavLink className='navLink' to='/nine'>
                <CardForChoice text='9' src='https://i.ibb.co/4YJhL68/36.png'/>
            </NavLink>
            <NavLink className='navLink' to='/six'>
                <CardForChoice text='6' src='https://i.ibb.co/MnmNxVG/24.png'/>
            </NavLink>
        </div>
    );
};

export default GroupCards;
