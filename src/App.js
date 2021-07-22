import React from 'react';
import Overview from './components/Overview'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value: ''}

    this.newTask = this.newTask.bind(this);
    this.submitTask = this.submitTask.bind(this);
  }

  newTask(event) {
    this.setState({value: event.target.value})
  }
  submitTask(event) {
    console.log('a task has been added: ' + this.state.value);
    event.preventDefault();
  }
  render() {
  return (
    <div className="App">
      <h1>Task Array</h1>
     <Overview items="Task Array Items" />
     <form>
       <label>
         Add new Task
         <input type="text" task="task" />
         </label>
         <input type="submit" value="Agregar" />
     </form>
    </div>
  );
}
}

export default App;
