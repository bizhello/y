import React from 'react';
import { NavLink } from "react-router-dom";

import '../styles/header.css'

const Header = ({text, main}:{text:string, main: boolean}) => {
    return (
        <header className='header'>
                <svg viewBox="0 0 960 100">
                    <symbol id="s-text">
                        <text textAnchor="middle" x="50%" y="80%">{text}</text>
                    </symbol>

                    <g className="g-ants">
                        <use xlinkHref="#s-text" className="text-copy"></use>
                        <use xlinkHref="#s-text" className="text-copy"></use>
                        <use xlinkHref="#s-text" className="text-copy"></use>
                        <use xlinkHref="#s-text" className="text-copy"></use>
                        <use xlinkHref="#s-text" className="text-copy"></use>
                    </g>
                </svg>
            {!main &&
                <NavLink className="header__text" to="/">Главная</NavLink>
            }

        </header>
    );
};

export default Header;