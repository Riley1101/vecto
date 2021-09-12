import React from 'react'
import { useQuery, gql } from '@apollo/client'
import './home.css'
import bg from '../../static/bg.svg'
import Card from '../../componnet/card/card'
import Promotion from '../../componnet/promotion'
import Modal from '../../componnet/modal'
import { HOmeVector } from '../../utils/query'
export default function Home() {


    let { data, loading, error } = useQuery(HOmeVector);

    return (
        <>
            <section className='hero'>
                <div className="intro">
                    <h1 className="intro__header">Start building ideas <br /> project with cool vectors <br /> form Vecto</h1>
                    <p className='intro_para'>Tired of finding the best illustrations for your idea and looking for high quality platform .
                        Sign up today to get your 30% discount !</p>
                    <button className="intro_cta">SIGN UP</button>
                </div>
                <div className="vector">
                    <img src={bg}>
                    </img>
                </div>
            </section>
            <section className='showcase'>
                <div className='showcase__container'>
                    <div className="tags">
                        <ul className='tags__list'>
                            <li className='tags__list__item tags__list__item--active'>Space</li>
                            <li className='tags__list__item'>Food</li>
                            <li className='tags__list__item'>Nature</li>
                            <li className='tags__list__item'>Food</li>
                            <li className='tags__list__item'>Nature</li>
                            <li className='tags__list__item'>Food</li>
                        </ul>
                    </div>
                    <h2 className='showcase__title'>Showcase</h2>
                    <div className='cards'>
                        {
                            loading && <h1>Loading ...</h1>
                        }
                        {
                            error && <h1>Error something</h1>
                        }
                        {
                            data && data.vectors.map(e =>
                                <Card data={e} key={e.id} />
                            )
                        }

                    </div>
                </div>

            </section>

            <section className='promotion'>
                <div className='promotion__container'>


                    <Promotion />
                </div>
            </section>



        </>
    )
}
