import React, { useState } from 'react'

import CardCarousal from '../CardCarousal/CardCarousal';

import img1 from '../../assets/Section-2/singapore.png';
import img2 from '../../assets/Section-2/sydney.png';
import img3 from '../../assets/Section-2/japan.png';
import img4 from '../../assets/Section-2/hongkong.png';

const Section2 = () => {

    const [state] = useState([
        { img: img1, title: "Singapore", text: "(218 Properties)" , active: "active"},
        { img: img2, title: "Singapore", text: "(218 Properties)" },
        { img: img3, title: "Singapore", text: "(218 Properties)" },
        { img: img4, title: "Singapore", text: "(218 Properties)" },
    ]);

    return (
        <div style={{ margin: '3rem 0'}}>
            <h1>Explore Country Opportunities</h1>
            <div>
                <div className="line"></div>
            </div>
                <div class="row" role="listbox">
                        {state.map((el, i) => {
                            return <CardCarousal key={i} img={el.img} text={el.text} title={el.title} active={el.active}/>
                        })}
                </div>
            </div>
    )

}
export default Section2;
