import React from 'react'
import './detail.css'
import bg from '../../static/pre.jpg'
import space from '../../static/space.png'
export default function Detail() {
    return (
        <div className='detail'>
            <div className='bg_space'>
                <img src={space} alt="" />
            </div>
            <div className="detail__vector">
                <img src={bg} alt="" />
            </div>
            <div className='detail__description'>
                <div className="detail__description__card">
                    <h2>3D shaptes</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, distinctio accusantium ex perferendis cumque amet temporibus aliquid nobis totam consequatur dolore, qui excepturi corporis debitis unde ipsa ducimus adipisci sunt.</p>
                    <button>DOWNLOAD</button>
                </div>

            </div>
        </div>
    )
}
