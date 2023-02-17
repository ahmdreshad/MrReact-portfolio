import React from 'react'
import './Card.css'

function Card({children, className, onclick}) {
  return (
      <article className={`card ${className}`} onClick={onclick}>
          {children}
    </article>
  )
}

export default Card