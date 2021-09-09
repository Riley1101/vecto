import React from 'react'
import './card.css'
import card from '../../static/card.svg'
export default function Card() {
    return (
        <div className='card'>
            <img src={card} className='card__img'></img>
            <p className='card__name'>Computer</p>
        </div>
    )
}
