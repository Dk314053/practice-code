import React from 'react'
import './Scoreboard.css'
const Scoreboard = ({scores,xPlaying}) => {
const {XScore,OScore}=scores;

  return (
    <div className='scoreboard'>
        <span className={`score X-score ${!xPlaying && "inactive"}`}>X-{XScore}</span>
        <span className={`score O-score ${xPlaying && "inactive"}`}>O-{OScore}</span>
        </div>
  )
}

export default Scoreboard;