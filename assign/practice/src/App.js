import React, { useLayoutEffect, useState } from 'react';
import Changename from './component/Changename';
import Countnumber from './component/Countnumber';
import './App.css';

export default function App() {
    const [text, setText] = useState("");
    const [list, setList] = useState([]);

    function handleChange(event) {
        setText(event.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(text);

        setList([...list, text])
        setText(" ")
    }

    return (



        <>
          
            <form onSubmit={handleSubmit}>
            <div className='New'>
                < input type="text " placeholder="Text " value={text} onChange={handleChange} />
                
                <button>Add</button>
                </div>
            </form>
            
            {
                <ul style={{textAlign:"center",fontSize:30}}>
                    {list.map((elem) => {
                        return (
                            <li style={{textAlign:"center"}}>{elem}</li>
                        )
                    })}
                </ul>
            }
          
             <Countnumber/>
            <Changename/>
            
     </>
        
    );
}




