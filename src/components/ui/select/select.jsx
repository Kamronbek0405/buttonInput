import React from 'react'
import './select.css'

export const Select = ( {children, id, className, value , name, variant }) => {
  return (
    <select name={name} id={id} className={className + 'select' + variant}>
        <option value={value}> option</option>
        <option value="">Value</option>
    </select>
  )
}
