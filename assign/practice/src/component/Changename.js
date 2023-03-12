import React from 'react'
import '../App.css'
import { useState } from 'react'

export default function Changename() {
    const [name,setName]=useState('Amit')

    function againChange(){
        setName(name === 'Amit'?'Rajan':'Amit')
    }
  return (
    <div className='namechange'>
        <h1>My name is {name}</h1>
        <button onClick={againChange}>Change Name</button>
        
       </div>
  )
}
