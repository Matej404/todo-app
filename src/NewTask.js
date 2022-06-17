import './style.css';

export default function NewTask({ handleAddTask, taskNameRef }) {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return(
        <div>
            <form className="form" onSubmit={handleSubmit} >
                <input className="input" type="text" ref={taskNameRef} />
                <input className="button" type="submit" value="Add" onClick={handleAddTask} />
            </form>
        </div>
    )
}