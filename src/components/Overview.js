import React from 'react'

function Overview({tasks}) {
    const listOfTasks = tasks.map((task) => 
     <li key={task.id}>{task.text}</li>
    )
        return (
            <div>
                {listOfTasks}
            </div>
        )
}
export default Overview
