import React from "react";
import "./style.css";
import {changeColor} from './Atom'
import {useRecoilState} from 'recoil'
export default function App() {
  const [isColor,setIsColor] =useRecoilState(changeColor)
const handleChange=()=>{
  setIsColor(!isColor)
}

  return (
    <div>
     <h1 style={isColor ? {color:'blue'}:{color:'red'}}>Hi,I change the color on Click the button </h1>
     <button onClick={handleChange}>Click Me </button>
    </div>
  );
}
