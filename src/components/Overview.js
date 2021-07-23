import React from 'react'

function Overview({tasks}) {
    console.log(tasks)
    const listOfTasks = tasks.map((task) => 
     <ul key={task.id}>({task.number}){" "}{task.text}</ul>
    )
        return (
            <div>
                {listOfTasks}
            </div>
        )
}
export default Overview
