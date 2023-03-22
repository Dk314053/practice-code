import './Navbar.css'
import {BiMenu } from "react-icons/bi";
import {AiOutlineCloseCircle } from "react-icons/ai";
import {AiOutlinePlayCircle } from "react-icons/ai";

import { useState } from 'react';


const Navbar = ()=>{

        const [closeclass,setCloseclass]=useState(null);

    
    const handelClick=()=>{
        if(closeclass){
            setCloseclass(false);
            return;
        }
        setCloseclass(true);
    }
    console.log(closeclass)

    return (
        <>
        <nav  className= {closeclass ? "navbar active ":"navbar"}>
            <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIL7bxD5pKlJDh2WZtL-L0BD6WclizwcMmCw&usqp=CAU" alt="" />
            <ul className='ul-tag'>
                <li>Home</li>
                <li>Services</li>
                <li>Contact</li>
                <li>About Us</li>
            </ul>
           </div>
            <div className='bar-div'>
                
                <BiMenu onClick={handelClick} className='menubar'/>
                <AiOutlineCloseCircle onClick={handelClick} className='closebar'/>
                </div>
            <div className='btn-div'>
                <button className='login-btn'>Login</button>
                <button className='signup-btn'>Sign Up</button>

            </div>
           
        </nav>
        <div className="page">
        
        <h2>Let's Bring Your <br/>team togethor <br/> in OnClick</h2>
        </div>
        <button className='btn1'>Get Started</button>
     < AiOutlinePlayCircle className='player'fontSize={'50px'} />
     <p className='paragraph'>How to use</p>
     <img className='photo' src='https://thumbs.dreamstime.com/b/portrait-handsome-amazed-cheerful-pre-teen-boy-sudden-news-sale-reaction-over-bright-yellow-color-background-253975098.jpg' alt=''/>

        </>
    )


}

export default Navbar;

