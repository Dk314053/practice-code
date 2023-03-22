import React from 'react'
import Tictoc from './Tictoc'
import './Board.css'
const Board = ({board,onClick}) => {
  return (
    <div className='board'>
        {board.map((value,idx)=>{
            return  <Tictoc value={value} onClick={()=> value === null && onClick(idx)}/>
        })}
       
    </div>
  )
}

export default Board