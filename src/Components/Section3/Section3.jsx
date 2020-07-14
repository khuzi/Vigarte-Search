import React , { useState } from 'react'

import img1 from '../../assets/Section-3/imageSmall_1.png'
import img2 from '../../assets/Section-3/imageSmall_2.png'
import img3 from '../../assets/Section-3/imageSmall_2.png'
import img4 from '../../assets/Section-3/imageSmall_4.png'
import img5 from '../../assets/Section-3/imageSmall_5.png'
import img6 from '../../assets/Section-3/imageSmall_6.png'

import HoriCard from './horiCard/horiCard';
import classes from './Section3.module.css';


const Section3 = () => {
    const [state] = useState([
        {img: img1 , title:'76 Neon Street'},
        {img: img2 , title:'608 Wickham Street'},
        {img: img3 , title:'245 Milperra Road'},
        {img: img4 , title:'Fort Altona Business Park'},
        {img: img5 , title:'Suite 902'},
        {img: img6 , title:'Poplar Atlantic Industrial'}
    ])
    return (
            <div className={classes.Section3}>
                {state.map((el,id)=> {
                    return <HoriCard key={id} title={el.title} img={el.img}/>
                })}
            </div>
    );
};

export default Section3;