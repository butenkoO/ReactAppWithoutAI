import React from 'react'

export const Button = ({ onClick, label, disabled }) => {
  return (
    <button onClick={onClick} disabled={disabled} style={{ marginTop: '10px', display: 'block' }}>{label}</button>
  )
}
