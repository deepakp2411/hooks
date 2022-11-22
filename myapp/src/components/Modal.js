import React from 'react'

const Modal = ({ modalContent }) => {
  return (
    <div className='grid place-content-center'>
        <p>{modalContent}</p>
    </div>
  )
}

export default Modal