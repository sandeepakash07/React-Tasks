import { useEffect, useState } from "react"
import { ChevronRight,ChevronLeft } from "lucide-react";

export default function ImageSlider({url,page=1,limit=5}){
    const [images,setImages]= useState([]); 
    const [currentSlide,setCurrentSlide]=useState(0);
    const [errorMsg,setErrorMsg]=useState(null);
    const [loading,setLoading] = useState(false)

    const fetchImages = async(getUrl)=>{
        try {
            const response=await fetch(`${getUrl}?page=${page}&limit=${limit}`);
            const data= await response.json()
            if(data){
                setImages(data);
                setLoading(false);
            }
            
        } catch (err) {
            setErrorMsg(err.message);
            setLoading(false);
        }
    }

    useEffect(()=>{
        if(url!=='') fetchImages(url)
    },[url])

    console.log(images)

    if(loading){
        return <image src='/Ghost.gif' alt='loading...'/>
    }

    if(errorMsg){
        return <h1>Error Message! {errorMsg}</h1>
    }

    const handlePrevious= ()=>{
        setCurrentSlide(currentSlide===0? images.length-1: currentSlide-1)
    }
    const handleNext=()=>{
        setCurrentSlide(currentSlide===images.length-1? 0: currentSlide+1)
    }


    return(
        <div className=" flex flex-col justify-center items-center">
            <div className=" relative flex justify-center items-center">
                <div className="absolute left-4">
                    <ChevronLeft className="text-white font-bold" onClick={handlePrevious}/>
                </div>
                {
                images&&images.length?
                images.map((item,index)=>(
                    <div key={item.id}>
                        <img src={item.download_url} alt={item.download_url} className={currentSlide===index?'':"hidden"}/>
                    </div>
                )):null
                }
                <div className="absolute right-4">
                    <ChevronRight className="text-white font-bold" onClick={handleNext}/>
                </div>
                <div className="current-indicator absolute bottom-2 flex gap-4">
                {
                    images&&images.length?
                    images.map((_,index)=>(
                        <button className="p-1.5 rounded-full bg-gray-300" key={index}></button>
                    )):null
                }
                </div>
            </div>         
        </div>
    )
}