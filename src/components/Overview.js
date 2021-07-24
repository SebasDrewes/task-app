import React from 'react'

function Overview({tasks , deleteTask}) {
    console.log(tasks)
    const listOfTasks = tasks.map((task, index) =>
    <div>
     <ul key={task.id}>({index + 1}){" "}{task.text}</ul>
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
