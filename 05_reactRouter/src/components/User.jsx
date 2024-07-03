import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

function User() {
    const { userId } = useParams()
    const [serachParams, setSeachParams] = useSearchParams()

    const name = serachParams.get('name')
    return (
        <>
            <div className='flex flex-wrap justify-center bg-green-600 text-white text-xl'>User: {userId}</div>
            <div className='flex flex-wrap justify-center bg-green-600 text-white text-xl'>Name: {name}</div>
        </>
    )
}

export default User
