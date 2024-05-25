"use client"
import React, { useState } from 'react'
import Star from './Star'


const StarRatingOuter = ({totalStars = 5}) => {

    const [rating, setRating] = useState(0)
    const [hoverRating, setHoverRating] = useState(0)

  return (
    <div className='flex gap-3 text-4xl'>
        {[...Array(totalStars)].map((element, index, array)=>{
            return <Star 
                        key={index+1}
                        onMouseEnter={()=>{setHoverRating(index+1)}}
                        onMouseLeave={()=>{setHoverRating(0)}}
                        onClick={()=>{setRating(index+1)}}
                        filled={index < (hoverRating || rating)}
            />
        })}
        
    </div>
  )
}

export default StarRatingOuter