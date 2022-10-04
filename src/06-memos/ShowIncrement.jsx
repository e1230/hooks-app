import React from 'react'

export const ShowIncrement = ({increment}) => {
    console.log("me volvi a generar unu");
  return (
    <button className='btn btn-primary' onClick={() => {
        increment(5)
    }}>
        Incrementar
    </button>
  )
}
