import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("https://api.github.com/users/Manamohan1999")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setData(data)
            console.log(data.avatar_url);
        })
    }, [])

    return (
        
        <div className='flex flex-wrap justify-center bg-green-600 text-white text-xl'>
            <img className="w-40 h-30" src={data.avatar_url} alt="image" />
            {data.name}  </div>
    )
}

export default Github
