import React, { useState } from 'react'

const RandomColorGenerator = () => {
    const [typeOfColor,setTypeOfColor]=useState('hex');
    const [color,setColor]=useState('#000000');

    // Random Color Genrator Utility Function
    const randomGenerator=(length)=>{
        return Math.floor(Math.random()*length)
    }

    // HEX Color Generator
    const handleHEXColor= ()=>{
        const hex = ['1','2','3','4','5','6','7','8','9','A','B','C','D','E']
        let hexColor = '#'
        for(let i=0;i<6;i++){
            hexColor+=hex[randomGenerator(hex.length)]
        }
        setColor(hexColor)
    }
    // RGB Color Generator
    const handleRGBColor=()=>{
        const r = randomGenerator(255);
        const g = randomGenerator(255);
        const b = randomGenerator(255);
        setColor(`rgb(${r},${g},${b})`)
    }

    //Handle Random Color Generator
    const handleGenerator = ()=>{
        if(typeOfColor==='hex'){
            handleHEXColor();
        }
        else{
            handleRGBColor();
        }
    }
  return (
    <div className='flex flex-col justify-center items-center py-4 text-white gap-6' style={{backgroundColor:color,height:'100vh'}}>
        <div className='flex justify-center items-center gap-6'>
            <button className='px-4 py-2 bg-gray-400 text-white font-medium rounded-lg' onClick={()=>setTypeOfColor('hex')}>
                Create HEX Color
            </button>
            <button className='px-4 py-2 bg-gray-400 text-white font-medium rounded-lg' onClick={()=>setTypeOfColor('rgb')}>
                Create RGB Color
            </button>
            <button className='px-4 py-2 bg-gray-400 text-white font-medium rounded-lg' onClick={handleGenerator}>
                Generate Color
            </button>
        </div>
        <h2 className='font-bold text-3xl'>{typeOfColor}</h2>
        <h3 className='font-bold text-3xl'>{color}</h3>
    </div>
  )
}

export default RandomColorGenerator