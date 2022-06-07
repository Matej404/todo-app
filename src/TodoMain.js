import './style.css';
import { useRef, useState } from 'react';
import NewTask from './NewTask';
import Task from './Task';
import { v4 as uuidv4 } from "uuid";


export default function TodoMain() {
    const [tasks, setTasks] = useState([]);
    const taskNameRef = useRef();

    const handleAddTask = (e) => {
        const name = taskNameRef.current.value;
        if (name === "") return 
        setTasks(prevTasks => {
            return [...prevTasks, { id: uuidv4(), name: name, complete: false }]
        })
        taskNameRef.current.value = null;
    }

  return (
    <div className="container">
      <h1 className="heading">What To Do?</h1>
      <div className="todo-list">
      <NewTask handleAddTask={handleAddTask} 
               tasks={tasks} setTasks={setTasks} 
               taskNameRef={taskNameRef} />
      {tasks.map(task => {
            return <Task key={task.id} task={task} />
        })}
      </div>
    </div>
  );
}

