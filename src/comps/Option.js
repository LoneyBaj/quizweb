import React, { useState } from "react";

export default function Option(props){
    const [isOpen,setIsOpen] = useState(false)
    const [hasDisappeared,setHasDisappeared] = useState(false)
    const handleClick = () => {
        setIsOpen(true)
        setTimeout(() => {
            setHasDisappeared(true)
        }, 2000);
    }
    return(
        <div className="bg-white w-[200px] h-[70px] glass3 flex justify-center items-center">
            {!hasDisappeared ? <div onClick={handleClick} className={`cursor-pointer transition-transform duration-1000 font-black flex justify-center items-center w-[200px] h-[70px] absolute glass3 ${isOpen ? "-translate-y-[1000px]" : ""}`}>{props.option}</div> : ""}
            <div className={` font-black text-center font-sans ${!isOpen ? "filter blur-xl" : ""} pointer-events-none`}><p className={` ${!isOpen ? "opacity-0" : "opacity-100"} transition-all duration-700 pointer-events-none`}>{props.text}</p></div>
        </div>
    )
}