import React, { useState } from "react";

export default function FinalOption(props){
    const [isOpen,setIsOpen] = useState(false)
    const [hasDisappeared,setHasDisappeared] = useState(false)
    const handleClick = () => {
        setIsOpen(true)
        setTimeout(() => {
            setHasDisappeared(true)
        }, 2000);
    }
    return(
        <div className="bg-white w-[900px] h-[50px] glass3 flex justify-center items-center">
            {!hasDisappeared ? <div onClick={handleClick} className={`cursor-pointer transition-transform duration-1000 font-black flex justify-center items-center w-[900px] h-[50px] absolute glass3 ${isOpen ? "-translate-y-[1000px]" : ""}`}>{props.option}</div> : ""}
            <div className={`text-center font-black font-sans ${!isOpen ? "filter blur-xl" : ""} pointer-events-none`}><p className={`${!isOpen ? "opacity-0" : "opacity-100"} transition-all duration-700 pointer-events-none`}>{props.text}</p></div>
        </div>
    )
}