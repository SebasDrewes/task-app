import React from 'react'

function Overview({tasks}) {
    const listOfTasks = tasks.map((task, index) => 
     <li key={index}>{task}</li>
    )
        return (
            <div>
                {listOfTasks}
            </div>
        )
}
export default Overview
