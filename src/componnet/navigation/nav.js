import React from 'react'
import './nav.css'
export default function Nav() {
    return (
        <header className='header'>
            <a href="#" className='header__logo'>Vecto</a>
            <ul className='header__list'>
                <li className='header__list__item'>Illustrations</li>
                <li className='header__list__item'>Contact</li>
            </ul>
        </header>
    )
}
