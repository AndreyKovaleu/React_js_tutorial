// Чистые функциональные компоненты
import React from 'react'

function MomoComp({ name }) {
  console.log("MomoComp");

  return (
    <div>
      {name}
    </div>
  )
}

export default React.memo(MomoComp)