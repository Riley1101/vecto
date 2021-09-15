import React from 'react'
import './index.css'
import api_end from '../../api'
import { useHistory } from 'react-router'
export default function PremiumCard({ data }) {
    const history = useHistory();
    return (
        <div onClick={() => history.push(`/detail/${data.id}`)} className='premium__card' style={{ backgroundImage: `url(${api_end}${data.profile.url})` }}>
            <div className='premium__card__text'>
                <h3>{data.name}</h3>
                <p>{data.assert}</p>
            </div>
        </div>
    )
}
