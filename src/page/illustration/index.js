import React from 'react'
import './index.css'
import { IllData } from '../../utils/query'
import { useQuery } from '@apollo/client'
import Card from '../../componnet/card/card'
export default function Illustration() {
    const { data, loading, error } = useQuery(IllData)
    console.log(data)
    return (
        <div className='ill'>
            <div className='ill__form'>
                <button>ALL</button>
                <input type="text" type="text" placeholder="Search" />
            </div>
            <h1 className='ill__heading'>Illustration</h1>
            <div className='ill__cards'>
                {data && data.vectors.map(e => <Card key={e.id} data={e} />)}
            </div>
            <div className="ill__more">
                <button>Load More</button>
            </div>
        </div>
    )
}
