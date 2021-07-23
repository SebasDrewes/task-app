import React from 'react';
import Overview from './components/Overview'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newTask: '',
      tasksList: []
    }

    this.addTask = this.addTask.bind(this);
    this.saveFormChange = this.saveFormChange.bind(this);
  }
  saveFormChange(event) {
    this.setState({
        newTask: event.target.value
    })
    }

  addTask(event) {
    this.setState(state => {
      const tasksList = state.tasksList.concat(state.newTask);
      const newTask = state.newTask
      return { 
        tasksList,
        newTask,
      }
  })
  console.log(this.state)
  event.preventDefault()
  }
  render() {
  return (
    <div className="App">
      <h1>Task Array</h1>
     <Overview items="Task Array Items" />
     <form onSubmit={this.addTask}>
       <label>
         Add new Task
         <input type="text" value ={this.state.value} onChange={this.saveFormChange}/>
         </label>
         <input type="submit" value="Agregar" />
     </form>
    </div>
  );
}
}

export default App;
