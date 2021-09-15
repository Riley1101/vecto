import React from 'react'
import './detail.css'
import bg from '../../static/pre.jpg'
import space from '../../static/space.png'
import { Init } from './hooks'
import api_end from '../../api'
export default function Detail() {
    const { data, error, loading } = Init();

    if (loading) return <h1>Loading</h1>
    if (error) return <h1>Error</h1>

    return (
        <div className='detail'>
            <div className='bg_space'>
                <img src={space} alt="" />
            </div>
            <div className="detail__vector">
                <img src={`${api_end}${data.premium.profile.url}`} alt="" />
            </div>
            <div className='detail__description'>
                <div className="detail__description__card">
                    <h2>{data.premium.name}</h2>
                    <p>{data.premium.description}</p>
                    <button>DOWNLOAD</button>
                </div>

            </div>
        </div>
    )
}
