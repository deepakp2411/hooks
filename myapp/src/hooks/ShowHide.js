import React, { useEffect, useState } from 'react'

const ShowHide = () => {
    const [show, setShow]  = useState(false)

  return (
    <>
        <div>
            <button onClick={() => setShow(!show)}>Toggle</button>
            {show && <Item /> }
        </div>
    </>
  )
}

const Item = () => {
    const [size, setSize] = useState(window.innerWidth)

    const checkSize = () => {
        setSize(window.innerWidth)
    }

    useEffect(() => {

        window.addEventListener('resize',checkSize)
        return () => {
            window.removeEventListener('resize',checkSize)
        }

    },[])

    return (
        <div>
            <h1>window size: {size}</h1>
        </div>
    )
}

export default ShowHide