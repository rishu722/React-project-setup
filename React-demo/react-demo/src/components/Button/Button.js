import React from 'react'
import './Button.scss'

const Button = (props) => {
  return (
    <button type='button' className='btn'>
      {props.title}
    </button>
  )
}

export default Button
