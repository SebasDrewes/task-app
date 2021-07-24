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
        id: uniqid()
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
        },
    })
    }
  
  addTask(event) {
    event.preventDefault()
    if (this.state.newTask.text !== '') {
    this.setState({
      newTask: {
        text: '',
        id: uniqid(),
      },
      tasksList: this.state.tasksList.concat(this.state.newTask),
    
  })}
  }
  // en el boton de overview, se pasa como parametro la id correspondiente a cada task
  deleteTask(taskId){
    this.setState({
      // si se toca ese boton, se borra task que coincida con el id pasado como parametro
      tasksList: this.state.tasksList.filter((task) => task.id !== taskId)
    })
  }
  editTask(taskId, taskNewText){
    if (taskNewText !== '')
    this.setState({
      newTask: {
        text: '',
        id: this.state.newTask.id,
      },
      taskList: this.state.tasksList.map((task) => {
        if(task.id === taskId) {
          return task.text = taskNewText
        } else {
          return task;
        }
      })
    })
  }
  render() {
  return (
    <div className="App" id="app">
      <h1 id="title">Lista de Tareas</h1>
     <Overview tasks={this.state.tasksList} deleteTask={this.deleteTask} editTask={this.editTask} editedTask={this.state.newTask.text}/>
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
