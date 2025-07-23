import { useState } from "react";
import QRCode from "react-qr-code";

export default function QRGenerator(){
    const [qrCode,setQRCode]=useState('')
    const [input,setInput]=useState('')
    const handleGenerateQRCode=()=>{
        setQRCode(input)
    }
    return(
        <div className="h-screen flex flex-col justify-center items-center gap-4">
            <h1>QR Code Generator</h1>
            <div className="flex gap-4">
                <input onChange={(e)=>setInput(e.target.value)} type="text" placeholder="Enter text or link"  className="outline outline-none border border-gray-500 px-6 py-1 rounded-lg"/>
                <button disabled={input&&input.trim()!==""?false:true} onClick={handleGenerateQRCode} className="px-4 py-1 bg-emerald-500 text-white font-medium rounded-lg">Generate</button>
            </div>
            <div>
                <QRCode id="qr-code-value" value={qrCode} size={400}/>
            </div>
        </div>
    )
}