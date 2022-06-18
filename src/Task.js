import React from 'react';
import "./style.css";

export default function Task({ task, handleDeleteTask }){
  

  return (
    <div className="divtask">
      <span className="span">{task.name}</span>
      <button className="button" onClick={() => handleDeleteTask(task)}><span>&times;</span></button>
    </div>
  )
}