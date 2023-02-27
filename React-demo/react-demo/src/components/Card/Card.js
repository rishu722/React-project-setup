import React from 'react'
import './Card.scss'

const Card = (props) => {
  return (
    <div className='cardWrapper'>
      <h2>{props.title}</h2>
      <p>{props.para}</p>

    </div>
  )
}

export default Card
