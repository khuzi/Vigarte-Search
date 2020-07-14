import React, { useState } from 'react'

import SectionCard from '../SectionCard/SectionCard';

import img1 from '../../assets/Section-4/image1.png';
import img2 from '../../assets/Section-4/image2.png';
import img3 from '../../assets/Section-4/image3.png';
import img4 from '../../assets/Section-4/image4.png';
import img5 from '../../assets/Section-4/image5.png';
import img6 from '../../assets/Section-4/image6.png';

import smallImg1 from '../../assets/Icons/flagAustralia.png';
import smallImg2 from '../../assets/Icons/flagSingapore.png';



const Section4 = () => {
    const [state] = useState([
        {img: img1 , smallImg: smallImg1},
        {img: img2 , smallImg: smallImg2},
        {img: img3 , smallImg: smallImg1},
        {img: img4 , smallImg: smallImg2},
        {img: img5 , smallImg: smallImg1},
        {img: img6 , smallImg: smallImg2},
    ]);
    return (
        <React.Fragment>
            <div className="row no-gutters m-2">
                <h1>Invest Around The World</h1>
                <div>
                    <div className="line" />
                </div>
                {state.map((el, i) => {
                    return <SectionCard show title="Fort Altona Business Park" key={i} img={el.img} smallImg={el.smallImg}/>
                })}
            </div>
        </React.Fragment>
    )
}

export default Section4;
