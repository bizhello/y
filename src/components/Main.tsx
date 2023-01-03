import React from 'react';

import Header from "./Header";
import GroupCards from "./GroupCards";

const Main = () => {
    return (
        <div>
            <Header main={true} text='Технология 43'/>
            <GroupCards />
        </div>
    )
};

export default Main;
