import React from 'react'

import classes from './SectionCard.module.css';

const SectionCard = (props) => {
    let smallContent = (
        <div className={classes.ContentImg}>
            <p>10 : 36 : 40 : 20</p>
            <p>days hrs mins secs</p>
        </div>
    );
    if (props.show) {
        smallContent = (
            <div className={classes.ContentImg} style={{padding: '0.3rem'}}>
                <p>Full Interest</p>
            </div>
        );
    }
    return (
        <section className={["col-12 col-md-6 col-lg-4 mx-auto", classes.SectionCard].join(' ')}>
            <div className="card" style={{ maxWidth: '23rem', border: 'none' }}>
                <div className={classes.CardImg}>
                    <img src={props.img} className="card-img-top" alt="..." />
                    {props.show ? <div className={classes.SmallImg}>
                        <img src={props.smallImg} alt="" />
                    </div> : null}
                    {smallContent}
                </div>
                <div className="card-body">
                    <div className={classes.BodyItem} style={{ borderBottom: '1px solid #ddd' }}>
                        <h5 className="card-title">{props.title}</h5>
                        <p>77 Robinson Road, Shenton <br /> Way-Robinson Rd-Cecil St,Singapore</p>
                    </div>
                    <div className={classes.ItemContainer} style={{ borderBottom: '1px solid #ddd' }}>
                        <ul>
                            <li>Year Of Completion</li>
                            <li>Land Tenure</li>
                            <li>Site Area (sqft)</li>
                            <li>NLA (sqft)</li>
                        </ul>
                        <ul>
                            <li>2019</li>
                            <li>99 Years</li>
                            <li>27,281</li>
                            <li>3,700,000</li>
                        </ul>
                    </div>
                    <div className={classes.ItemContainer}>
                        <ul>
                            <li>Car Park Lots</li>
                            <li>Components</li>
                            <li>Major Tenants</li>
                        </ul>
                        <ul>
                            <li>900</li>
                            <li>Office,Retail,Hotel</li>
                            <li>CITI Bank,Allinaz Mitsui</li>
                        </ul>
                    </div>
                    <button className="btn btn-lg">Register To Bid</button>
                </div>
            </div>
        </section>
    );
};

export default SectionCard;
