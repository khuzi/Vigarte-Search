import React from 'react'

import classes from './horiCard.module.css';

const HoriCard = (props) => {
    return (
        <section className={[classes.HoriCard].join(' ')}>
            <div className={classes.CardImg}>
                <img src={props.img} alt="" />
            </div>
            <div className={classes.CardContent}>
                <div className={classes.UpperContent}>
                    <h5>{props.title}</h5>
                    <p>0556 Marvin Land Suite 998 <br/>Sydney, Australia</p>
                    <p>Year of Completion&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2019</p>
                </div>
                <div className={classes.LowerContent}>
                    <ul className={classes.Item}>
                        <li>99 Years</li>
                        <li>Land Tenure</li>
                    </ul>
                    <ul className={classes.Item}>
                        <li>27,281</li>
                        <li>Site Area (sqft)</li>
                    </ul>
                    <ul className={classes.Item}>
                        <li>3,700,000</li>
                        <li>NLA (sqft)</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default HoriCard;
