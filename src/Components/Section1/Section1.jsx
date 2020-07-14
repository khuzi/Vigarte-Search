import React, { useState } from 'react'

import SectionCard from '../SectionCard/SectionCard';

import img1 from '../../assets/Section-1/imageA.png';
import img2 from '../../assets/Section-1/imageB.png';
import img3 from '../../assets/Section-1/imageC.png';

const Section1 = () => {
    const [cardImg] = useState([img1, img2, img3]);
    return (
        <React.Fragment>
            <div className="row no-gutters m-2 mt-5">
                <h1>Deals Closing</h1>
                <div>
                    <div className="line" />
                </div>
                {cardImg.map((img, i) => {
                    return <SectionCard title="Robinson 77" key={i} img={img} />
                })}
            </div>
        </React.Fragment>
    )
}

export default Section1
