import React from 'react'

const Star = ({onMouseEnter, onMouseLeave, onClick, filled}) => {
  return (
    <div
    className={`flex cursor-pointer ${filled? 'text-yellow-400' : 'text-gray-400'}`}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    onClick={onClick}
    >
        &#9733;
    </div>
  )
}

export default Star