import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'

const StarRating = ({noOfStars=5}) => {
    const [rating,setRating]=useState(0)
    const [hover,setHover]=useState(0)

    const handleOnClick =(getCurrentId)=>{
        setRating(getCurrentId)
    }
    const handleMouseHover =(getCurrentId)=>{
        setHover(rating)
    }
    const handleMouseMove=(getCurrentId)=>{
        setHover(getCurrentId)
    }
  return (
    <div className='h-screen'>
        <div className='h-full flex justify-center items-center'>
            {
            [...Array(noOfStars)].map((_,index)=>{
                index+=1
                return  <FaStar
                key={index}
                className={index<=(hover||rating)?'text-yellow-500':null}
                onClick={()=>handleOnClick(index)}
                onMouseLeave={()=>handleMouseHover(index)}
                onMouseMove={()=>handleMouseMove(index)}
                size={40}
                />
            }
                
            )
        }
        </div> 
    </div>
  )
}

export default StarRating