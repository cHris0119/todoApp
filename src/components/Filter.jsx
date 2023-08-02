import React from 'react'
import './Filter.css'

const Filter = ({setActive, active}) => {

  const handleClick = (e) => {
    setActive(e.target.value)
  }

  return (
    <div className='filter-container'>
        <button onClick={handleClick}  className={`filter ${active === 'all' ? 'active' : ''}`} value='all' >All</button>
        <button onClick={handleClick}  className={`filter ${active === 'done' ? 'active' : ''}`} value='done' >Done</button>
        <button onClick={handleClick}  className={`filter ${active === 'todo' ? 'active' : ''}`} value='todo' >Todo</button>
    </div>
  )
}

export default Filter