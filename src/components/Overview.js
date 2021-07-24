import React from 'react'

function Overview({tasks , deleteTask, editTask}) {

    const listOfTasks = tasks.map((task, index) =>
    <div>
     <ul key={task.id}>({index + 1}){" "}{task.text}</ul>
     <button onClick={() => editTask(task.id, "hello")}>Editar Task</button>
     <button onClick={() => deleteTask(task.id)}>Eliminar Task</button>
     </div>
    )
        return (
            <div>
                {listOfTasks}
            </div>
        )
}
export default Overview
