// Установка стилей в React из внешнего файла
import React from 'react'

import './StyleSheets.css';

function StyleSheets(props) {
  let className = props.primary ? 'primary' : '';

  return (
    <div>
      <h1 className={`${className} font-xl`}>StyleSheets</h1>
    </div>
  )
}

export default StyleSheets