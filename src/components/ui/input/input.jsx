import React from 'react'
import './input.css'

export const Input = ({children, variant, type , className, id, placeholder,  }) => {
  return (
    <div>
        <input id={id} type={type} className={className  + " input " + variant } placeholder={placeholder} />
    </div>
  )
}
