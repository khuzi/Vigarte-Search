import React from 'react'
import classes from './CardCarousal.module.css';

const CardCarousal = (props) => {
    return (
        <div className={["col-12 col-sm-6 col-md-4 col-lg-3 text-center", classes.CardCarousal].join(' ')}>
            <div className="card" style={{ maxWidth: '25rem', border: 'none' }}>
                <img src={props.img} class="card-img-top" alt="..." />
                <div class="card-body" style={{ background: '#f4f4f4' }}>
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">{props.text}</p>
                </div>
            </div>
        </div >
    );
};

export default CardCarousal;
