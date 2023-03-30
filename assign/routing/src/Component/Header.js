import React from 'react'
import {NavLink} from "react-router-dom";
import {HiUserCircle } from "react-icons/hi";
import './Header.css'



const Header = () => {

  const data=[ 
    {
   navOption:'Home',
   path:"/"

  },
  {
    navOption:'AboutUs',
    path:'/aboutus'
  },
  {
    navOption:'Login',
    path:'/login'
  },
  {
    navOption:'Register',
    path:'/register'
  },
]

  
  return (
    <>
    <nav >
    <div className='icon'>
 <HiUserCircle  />
 </div>
 <ul className='maincontainer'>
  {
    data.map((Data)=>
    <li>
    <NavLink to={Data.path}>{Data.navOption}</NavLink>
  </li>)
  }

 </ul>
 </nav>
 

 </>
 
  )
}

export default Header