import './style.css';
import { useRef } from 'react';
import NewTask from './NewTask';
import Task from './Task';
import { v4 as uuidv4 } from "uuid";
import useLocalStorage from './useLocalStorage';

export default function TodoMain() {
    const [tasks, setTasks] = useLocalStorage("tasks", []);
    const taskNameRef = useRef();

    const handleAddTask = () => {
        const name = taskNameRef.current.value;
        if (name === "") return 
        setTasks(prevTasks => {
            return [{ id: uuidv4(), name: name, complete: false }, ...prevTasks]
        })
        taskNameRef.current.value = null;
    }

    const handleDeleteTask = ( { id } ) => {
       setTasks(prevTasks => {
        return prevTasks.filter(task => task.id !== id);
       })
    }

  return (
    <div className="container">
      <h1 className="heading">What To Do?</h1>
      <div className="todo-list">
      <NewTask handleAddTask={handleAddTask}  
               taskNameRef={taskNameRef} />
      {tasks.map(task => {
            return <Task key={task.id} 
                         task={task}
                         handleDeleteTask={handleDeleteTask}
                          />
        })}
      </div>
    </div>
  );
}

