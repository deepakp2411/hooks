import React, { useState } from 'react'

const UseObj = () => {
    const [name, setName] = useState('Deepak')

    const changeName = () => {
        setName(!name)
    }
  return (
    <>
        <div>
            <h1>{name}</h1>
            <button onClick={changeName}>Change</button>
        </div>
    </>
  )
}

export default UseObj