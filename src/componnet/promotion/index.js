import React from 'react'
import './index.css'
import rocket from '../../static/rocket.svg'
export default function Promotion() {
    return (
        <div className='promotion__card'>
            <img src={rocket} className="promotion__card__vector"></img>
            <h1 className='promotion__card__title'>
                Check out our high quality premium <br></br> vectors with 30% discount
            </h1>
            <button className='promotion__card__cta'>CHECK OUT</button>
        </div>
    )
}
