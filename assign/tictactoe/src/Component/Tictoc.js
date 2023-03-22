import React from 'react'
import '../Component/Tictoc.css'
const Tictoc = ({value,onClick}) => {
const style=value==="X" ? "box X":"box O"

  return (
    <button className={style} onClick={onClick}>{value}</button>
  )
}

export default Tictoc