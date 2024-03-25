import React from 'react'

function TimeLine({no, heading, para}) {
  return (
    <>
    <div className="timeline">
        <div className='numberOuter'>
            <div className="numberinner">{no}</div>
        </div>
        <div className="textContent">
            <h2>{heading}</h2>
            <p>{para}</p>
        </div>
    </div>
    </>
  )
}

export default TimeLine