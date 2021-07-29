import React, {useState} from 'react'

function Card({ children }) {
  return (
    <div className="card" style={{width : props.width ? props.width : "100%"}} {...props}>
      {children}
    </div>
  );
}

export default Card