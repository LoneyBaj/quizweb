import React, { useEffect, useState } from 'react'
import Option from "./comps/Option"
import FinalOption from "./comps/FinalOption"
import BgAnimated from './comps/BgAnimated';
import menu from "./ph/menu.png" 
import EditQuiz from './comps/EditQuiz';
import EditFinalQuizQuestion from './comps/EditFinalQuizQuestion';

function App() {
  const [isOpen,setIsOpne] = useState(false)
  const [selectd,setSelected] = useState("")
  const [options,SetOptions] = useState([{id:0},{id:1},{id:2},{id:3},{id:4}])

  const handleClick = () => {
    setIsOpne((prev) => !prev)
  }
  const handleSwitch = () => {
    switch(selectd){
      case "A":
        return <EditQuiz column="A" isOpen={isOpen} id={0} setValues={setValues} values={options[0]}/>
      case "B":
        return <EditQuiz column="B" isOpen={isOpen} id={1} setValues={setValues} values={options[1]}/>
      case "C":
        return <EditQuiz column="C" isOpen={isOpen} id={2} setValues={setValues} values={options[2]}/>
      case "D":
        return <EditQuiz column="D" isOpen={isOpen} id={3} setValues={setValues} values={options[3]}/>
      case "P":
        return <EditFinalQuizQuestion column="Final" isOpen={isOpen} id={4} setValues={setValues} values={options[4]}/>
    }
  }
    useEffect(() => {
      const data = JSON.parse(localStorage.getItem("items"))
      SetOptions(data)
    },[])
  const setValues = (value) => {
    var temp = []
    options.map((prev) => prev.id != value.id ? temp.push(prev) : temp.push({id: value.id,one: value.one, two: value.two, three: value.three, four: value.four, five: value.five}))
    SetOptions(temp)
    console.log(options)
    console.log(value)
  }

  window.onbeforeunload = closingCode;
  function closingCode(){
    localStorage.setItem("items",JSON.stringify(options))
  }
  return (
    <div className="bg-gradient-to-l from-orange-100 to-rose-100 w-screen h-screen flex items-start justify-center ">
        <BgAnimated />
        <div className={`z-30 bg-pink-100 ${!isOpen ? "w-[65px] h-[65px]" : "w-[165px] h-[355px]"} right-6 top-3 absolute p-2 rounded-[16px] transition-all duration-500`}>
          <img onClick={handleClick}  className={`cursor-pointer w-[50px] absolute z-30 ${isOpen ? "right-3" : "right-2"} transition-all duration-500`} alt="" src={menu}/>
              {isOpen ? <select value={selectd} onChange={(e) => setSelected(e.target.value)} className='bg-rose-50 rounded-sm'>
                <option></option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
                <option>D</option>
                <option>P</option>
              </select> : ""}
              {handleSwitch()}
          </div>
          <div className="grid grid-rows-4 grid-cols-4 gap-8 p-[100px]">
        <Option text={options[0].one} option="A1"/>
        <Option text={options[1].one} option="B1"/>
        <Option text={options[2].one} option="C1"/>
        <Option text={options[3].one} option="D1"/>

        <Option text={options[0].two} option="A2"/>
        <Option text={options[1].two} option="B2"/>
        <Option text={options[2].two} option="C2"/>
        <Option text={options[3].two} option="D2"/>

        <Option text={options[0].three} option="A3"/>
        <Option text={options[1].three} option="B3"/>
        <Option text={options[2].three} option="C3"/>
        <Option text={options[3].three} option="D3"/>

        <Option text={options[0].four} option="A4"/>
        <Option text={options[1].four} option="B4"/>
        <Option text={options[2].four} option="C4"/>
        <Option text={options[3].four} option="D4"/>

        <Option text={options[0].five} option="Zgjedhja e Kolonës A"/>
        <Option text={options[1].five} option="Zgjedhja e Kolonës B"/>
        <Option text={options[2].five} option="Zgjedhja e Kolonës C"/>
        <Option text={options[3].five} option="Zgjedhja e Kolonës D"/>
 </div>
 <div className='absolute z-10 top-[595px]'><FinalOption text={options[4].one} option="Përgjegja Përfundimtare"/></div>
    </div>
  );
}

export default App;
