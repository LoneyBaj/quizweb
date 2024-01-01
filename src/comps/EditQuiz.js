import React, { useState } from "react";

export default function EditQuiz(props) {
    const [X1,setX1] = useState(props.values.one)
    const [X2,setX2] = useState(props.values.two)
    const [X3,setX3] = useState(props.values.three)
    const [X4,setX4] = useState(props.values.four)
    const [X5,setX5] = useState(props.values.five)

    const handleClick = () => {
        props.setValues({id:props.id ,one: X1,two: X2,three: X3,four: X4,five: X5})
    }

    return(
        <div className={`${!props.isOpen ? "hidden" : ""} mt-[60px]`}>
                <div className='mt-[10px] relative flex'>
                  <p className='font-black text-white p-1'>{props.column}1</p>
                  <input className='w-[100%] rounded-[4px]'onChange={(e) => setX1(e.target.value)} value={X1} type='text'/>
                </div>
                <div className='mt-[10px] relative flex'>
                  <p className='font-black text-white p-1'>{props.column}2</p>
                  <input className='w-[100%] rounded-[4px]' onChange={(e) => setX2(e.target.value)} value={X2} type='text'/>
                </div>
                <div className='mt-[10px] relative flex'>
                  <p className='font-black text-white p-1'>{props.column}3</p>
                  <input className='w-[100%] rounded-[4px]' onChange={(e) => setX3(e.target.value)} value={X3} type='text'/>
                </div>
                <div className='mt-[10px] relative flex'>
                  <p className='font-black text-white p-1'>{props.column}4</p>
                  <input className='w-[100%] rounded-[4px]' onChange={(e) => setX4(e.target.value)} value={X4} type='text'/>
                </div>
                <div className='mt-[10px] relative flex'>
                  <p className='font-black text-white p-1'>Z{props.column}</p>
                  <input className='w-[100%] rounded-[4px]' onChange={(e) => setX5(e.target.value)} value={X5} type='text'/>
                </div>
                <button onClick={handleClick} className='w-[100%] bg-rose-200 font-bold h-[40px] mt-[10px] rounded-[10px]'>Set</button>
        </div>
    )
}