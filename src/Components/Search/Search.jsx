import React from 'react'

import Navbar from '../NavBar/Navbar';
import Showcase from '../Showcase/Showcase';
import Section1 from '../Section1/Section1';
import Section3 from '../Section3/Section3';
import Section4 from '../Section4/Section4';
import Section2 from '../Section2/Section2';

const Search = () => {
    return (
        <React.Fragment>
            <div className="container">
                <Navbar />
                <Showcase />
                <Section1 />
                <Section2 />
            </div>
            <div className="">
                <Section3 />
            </div>
            <div className="container">
                <Section4 />
            </div>
        </React.Fragment>
    );
};

export default Search;
