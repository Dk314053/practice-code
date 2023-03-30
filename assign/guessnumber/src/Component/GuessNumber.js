import  React from 'react';
import './GuessNumber.css'
import {useState} from 'react'
let randNum=Math.floor(Math.random()*20)+1;
export default function GuessNumber() {
const[value,setValue]=useState("")
const[random,setRandom]=useState(randNum)
const[count,setCount]=useState(0)
const[greet,setGreet]=useState("")
const handleChange=(e)=>{
setValue(e.target.value);
}
const handleClick=()=>{
  if(Number(value) == Number(random)){
setGreet("congratulations you guessed the right number")
 } else if(Number(value) > Number(random)){
   alert(" guessed a bigger number")
   
 }else if(Number(value) < Number(random)){
  alert ("guessed a smaller number")
 }
  setCount(count+1);
}

  return (
    <>
    <div className='main-container'>
      <h1 className='header'>Guess Lucky Number Game</h1>
      <div className='para'>
      <p>{greet}</p>
      <p>Total Round Play by User:{count}</p>
      </div>
     <input className='input' value={value} type="text" onChange={handleChange}/><br/><br/>
<button className='button' onClick={handleClick}>Match Number</button>
    </div>
    </>
  );
}
