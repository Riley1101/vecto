import React from 'react'
import './card.css'
import card from '../../static/card.svg'
import api_end from '../../api'
import Modal from '../modal'
import { Init } from './hooks'
export default function Card({ data }) {
    const { modal, toggle } = Init();
    return (
        <div className='card' dataStatus="free">
            {modal && <Modal toggle={toggle} data={data} />}
            <img src={`${api_end}${data.image.url}`} className='card__img' onClick={toggle}></img>
            <p className='card__name'>{data.name}</p>
        </div>
    )
}
