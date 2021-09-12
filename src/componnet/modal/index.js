import React from 'react'
import './index.css'
import cardbg from '../../static/card.svg'
import close from '../../static/close.svg'
import api_end from '../../api'
export default function Modal({ toggle, data }) {
    return (
        <div className='modal__container'>
            <div className='modal'>
                <button className="close" onClick={toggle}>
                    <img src={close} alt="" />

                </button>

                <div className="modal__vector">
                    <img src={`${api_end}${data.image.url}`}>
                    </img>
                </div>
                <div className="modal__text">
                    <h2 className='modal__text__title'>Modal Name</h2>
                    <p className='modal__text__desc'>Thank you for downloading check out our discounts as well</p>
                    <a className='modal__text__download'>DOWNLOAD</a>
                </div>

            </div>
        </div>
    )
}
