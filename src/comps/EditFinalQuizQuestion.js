import React, { useState } from "react";

export default function EditFinalQuizQuestion(props) {
    const [X1,setX1] = useState(props.values.one)

    const handleClick = () => {
        props.setValues({id:props.id ,one: X1})
    }
    return(
        <div className={`${!props.isOpen ? "hidden" : ""} mt-[60px]`}>
                <div className='mt-[10px] relative flex'>
                  <p className='font-black text-white p-1'>{props.column}</p>
                  <input className='w-[100%] rounded-[4px]'onChange={(e) => setX1(e.target.value)} value={X1} type='text'/>
                </div>
                <button onClick={handleClick} className='w-[100%] bg-rose-200 font-bold h-[40px] mt-[10px] rounded-[10px]'>Set</button>
        </div>
    )
}