import { useQuery } from '@apollo/client'
import { GetOnePre } from '../../utils/query'
import { useParams } from 'react-router'
const Init = () => {
    const { id } = useParams();
    const { data, error, loading } = useQuery(GetOnePre, { variables: { id: id } })
    return {
        data, error, loading
    }
}

export { Init }