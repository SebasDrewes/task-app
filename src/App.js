import React from 'react';
import Overview from './components/Overview'
import uniqid from "uniqid";
import './index.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      newTask: {
        text: '',
        editActivated: 'false',
        editTaskButton: 'Editar Tarea',
        id: uniqid(),
      },
      tasksList: [],
    }

    this.addTask = this.addTask.bind(this);
    this.saveFormChange = this.saveFormChange.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.editTask = this.editTask.bind(this);
  }
  saveFormChange(event) {
    this.setState({
        newTask: {
          text: event.target.value,
          id: this.state.newTask.id,
          editActivated: this.state.newTask.editActivated,
          editTaskButton: this.state.newTask.editTaskButton,
        },
    })
    }
  
  addTask(event) {
    event.preventDefault()
    if (this.state.newTask.text !== '') {
    this.setState({
      newTask: {
        text: '',
        editActivated: 'false',
        editTaskButton: 'Editar Tarea',
        id: uniqid(),
      },
      tasksList: this.state.tasksList.concat(this.state.newTask),
    
  });console.log(this.state.tasksList)}
  }
  // en el boton de overview, se pasa como parametro la id correspondiente a cada task
  deleteTask(taskId){
    this.setState({
      // si se toca ese boton, se borra task que coincida con el id pasado como parametro
      tasksList: this.state.tasksList.filter((task) => task.id !== taskId)
    })
  }


  editTask(taskId){
    this.setState({
      newTask: {
        text: '',
        id: this.state.newTask.id,
        editTaskButton: this.state.newTask.editTaskButton,
      },
      taskList: this.state.tasksList.map((task) => {
        if(task.id === taskId && task.editActivated === 'false'){
          console.log(task);
          return [
            task.editActivated = 'true',
            task.editTaskButton = 'Guardar Cambios'
          ]
          
        } else if (task.id === taskId && task.editActivated === 'true'){
          return [ 
            task.editActivated = 'false',
          task.editTaskButton = 'Editar Tarea'
        ]
        }
        else {
          return task;
        }
      }),
    })
  }
  render() {
  return (
    <div className="App" id="app">
      <h1 id="title">Lista de Tareas</h1>
     <Overview tasks={this.state.tasksList} deleteTask={this.deleteTask} editTask={this.editTask} editTaskButton={this.state.editTaskButton}/>
     <form onSubmit={this.addTask}>
       <label>
         <h1 className="taskText">Agregar o editar tarea</h1>
         <input id="addTaskForm" type="text" value ={this.state.newTask.text} onChange={this.saveFormChange}/>
         </label>
         <input className='button'type="submit" value="Confirmar" />
     </form>
    </div>
  );
}
}

export default App;
