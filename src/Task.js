import React from 'react';
import "./style.css";

export default function Task({ task }){
  

  return (
    <div className="divtask">
      <span className="span">{task.name}</span>
      <button className="button" >X</button>
    </div>
  )
}