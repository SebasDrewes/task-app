import React from 'react'

function Overview({tasks , deleteTask, editTask}) {

    const listOfTasks = tasks.map((task, index) =>
    <div key={'parentDiv'+task.id} className="taskContainer">
     <ul suppressContentEditableWarning={true} contentEditable={task.editActivated} key={task.id} className="taskText">{`(${index + 1}) ${task.text}`}</ul>
     <div key={'childDiv'+task.id} className="buttonContainer">
     <button className='button'onClick={() => editTask(task.id)}>{task.editTaskButton}</button>
     <button className='button'onClick={() => deleteTask(task.id)}>Eliminar Tarea</button>
     </div>
     </div>
    )
        return (
            <div id="taskList">
                {listOfTasks}
            </div>
        )
}
export default Overview
