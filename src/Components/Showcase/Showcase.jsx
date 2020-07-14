import React from "react";
import classes from "./Showcase.module.css";

import imgSearch from '../../assets/Icons/iconSearch_2.png';

const Showcase = () => {
    return (
        <section className={classes.Showcase}>
            <div className={classes.ShowcaseContent}>
                <h1>Looking...</h1>
                <h1>for the right house for you !</h1>
                <div />
            </div>
            <div className={[classes.TabNav, "row"].join(' ')}>
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <a className="nav-link active" href="/">
                            <h5>Search And Find</h5>
                            <p>Title, keyword</p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">
                            <h5>Location</h5>
                            <p>Singapore</p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">
                            <h5>Type</h5>
                            <p>Select</p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">
                            <img src={imgSearch} alt="" />
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Showcase;
