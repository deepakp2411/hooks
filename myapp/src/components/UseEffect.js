import React, { useEffect, useState } from 'react'

// cleanup function with useEffect

const UseEffect = () => {
    const [size, setSize] = useState(window.innerWidth)
    console.log(size)

    const checkSize = () => {
        setSize(window.innerWidth)
    }

    useEffect(() => {
        console.log('useEffect')
        window.addEventListener('resize', checkSize)

        return () => {
            console.log('cleanup')
            window.removeEventListener('resize',checkSize)
        }

    },[])
    console.log('Render')
    
  return (
    <>
        <h1>{size}px</h1>
    </>
  )
}

export default UseEffect