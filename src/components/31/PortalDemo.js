// Работа с Порталами
import React from 'react'
import * as ReactDOM from 'react-dom'

function PortalDemo() {
  return ReactDOM.createPortal(
    <h1>PortalDemo</h1>,
    document.getElementById('portal-root')
  )
}

export default PortalDemo