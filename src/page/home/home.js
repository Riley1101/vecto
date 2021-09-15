import React from 'react'
import './home.css'
import bg from '../../static/bg.svg'
import Card from '../../componnet/card/card'
import Promotion from '../../componnet/promotion'
import Modal from '../../componnet/modal'
import { Init } from './hooks'
import PremiumCard from '../../componnet/premium_card'


export default function Home() {


    const { tag, data, loading, error, setTag } = Init();
    console.log(data)
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
                            <li className='tags__list__item tags__list__item--active' onClick={() => setTag("all")}>All</li>
                            {
                                data && data.tags.map(item => <li onClick={() => setTag(Number(item.id))} className='tags__list__item' key={item.id}>{item.name} </li>)
                            }
                        </ul>
                    </div>
                    <h2 className='showcase__title'>Showcase</h2>
                    <div className='cards'>
                        {
                            loading && <h1>Loading ...</h1>
                        }
                        {
                            error && <h1>Error something{console.log(error)}</h1>
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
            <section className="premium">
                <div className='premium__container'>
                    <h2 className="premium__heading">Premium Packs</h2>
                    <div className='premium__cards'>
                        {
                            data && data.premiums.map(item => <PremiumCard data={item} key={item.id} />)
                        }

                    </div>
                </div>

            </section>


        </>
    )
}
