"use client"

import React, { useState } from 'react'
import StarRatingOuter from './StarRatingOuter'
import ThumbsRating from './ThumbRating'

const StarRatingMainForm = () => {

    const [safetyRating, setSafetyRating] = useState(0)
    const [communicationRating, setCommunicationRating] = useState(0)
    const [reccomendationRating, setRecommendationRating] = useState(null)

    function handleSubmit(ev){
        ev.preventDefault()
        alert(
            `Safety Rating: ${safetyRating}, Communication Rating: ${communicationRating}`
        )
        
    }




  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <div className='flex flex-col'>
            <span className='text-lg'>Safety</span>
            <span className='text-xs'>How would you rate us in terms of consumer safety?</span>
            <StarRatingOuter 
                rating={safetyRating}
                setRating={setSafetyRating}
            />
        </div>
        <div className='flex flex-col'>
            <span className='text-lg'>Communication</span>
            <span className='text-xs'>How would you rate us in terms of communication?</span>
            <StarRatingOuter 
            rating={communicationRating}
            setRating={setCommunicationRating}
            />
        </div>
        <div className='flex flex-col'>
            <span className='text-lg'>Would you recommend Ayuvya Ayurveda?</span>
            <span className='text-xs'>Would you recomment Ayuvya Ayurveda products to your friends?</span>
            <ThumbsRating
            rating={reccomendationRating}
            setRating={setRecommendationRating} />
        </div>
        <button className='border-4 hover:bg-green-300 py-2'>Submit</button> 
    </form>
  )
}

export default StarRatingMainForm