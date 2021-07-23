import React from 'react';
import Overview from './components/Overview'
import uniqid from "uniqid";

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      newTask: {
        text: '',
        number: 1,
        id: uniqid()
      },
      tasksList: [],
    }

    this.addTask = this.addTask.bind(this);
    this.saveFormChange = this.saveFormChange.bind(this);
  }
  saveFormChange(event) {
    this.setState({
        newTask: {
          text: event.target.value,
          number: this.state.newTask.number,
          id: this.state.newTask.id,
        },
    })
    }

  addTask(event) {
    if (this.state.newTask.text !== '')
    this.setState({
      newTask: {
        text: '',
        number: this.state.newTask.number + 1,
        id: uniqid(),
      },
      tasksList: this.state.tasksList.concat(this.state.newTask),
  })
  event.preventDefault()
  }
  render() {
  return (
    <div className="App">
      <h1>Task Array</h1>
     <Overview tasks={this.state.tasksList} />
     <form onSubmit={this.addTask}>
       <label>
         Add new Task
         <input type="text" value ={this.state.newTask.text} onChange={this.saveFormChange}/>
         </label>
         <input type="submit" value="Agregar" />
     </form>
    </div>
  );
}
}

export default App;
