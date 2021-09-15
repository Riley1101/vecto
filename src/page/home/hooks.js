import { useState } from "react";
import { HOmeVector } from '../../utils/query'
import { useQuery } from '@apollo/client'

const Init = () => {
    const [tag, setTag] = useState('all')
    let { data, loading, error } = useQuery(HOmeVector, {
        variables: tag === 'all' ? { limit: 8, } : { limit: 8, tag: [tag] }
    });


    return { tag, data, loading, error, setTag }
}

export { Init }