import React from "react";
import   "../App.css";
import {useState} from 'react'


export default function Countnumber(){
    
    const[data,setData]=useState(0);

    function handleClickButton(){
        setData(data+1);
    }
    function handleClickButtonDecrease (){
        setData(data - 1);
    }
    return(
<div className='count'>
<h1 style={{color:"red"}}>{data}</h1>
<button onClick={handleClickButton}>Increase by 1</button>
<button onClick={handleClickButtonDecrease}>Decrease by 1</button>
</div>

    );
 }