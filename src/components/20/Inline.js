// Установка стилей в React через инлайн стили
import React from 'react'

const heading = {
  fontSize: '72px',
  color: 'green'
}

function Inline() {
  return (
    <div>
      <h1 className='error'>Error</h1>
      <h1 style={heading}>Inline</h1>
    </div>
  )
}

export default Inline