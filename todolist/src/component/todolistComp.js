import React from 'react';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      taskList: [],
      doneTasks: [], // Array to store indices of done tasks
    };
  }

  handleInput = (e) => {
    this.setState({
      userInput: e.target.value,
    });
  };

  addTaskList = () => {
    this.setState((prevState) => ({
      taskList: [...prevState.taskList, prevState.userInput],
      userInput: '',
      doneTasks: [...prevState.doneTasks, false], // Initialize done status as false
    }));
    console.log(this.state.doneTasks)
  };

  markTaskAsDone = (index) => {
    this.setState((prevState) => {
      const doneTasksCopy = [...prevState.doneTasks];
      doneTasksCopy[index] = !doneTasksCopy[index]; // Toggle done status
      return { doneTasks: doneTasksCopy };
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center mt-5">This is the ToDoApp</h1>
        <div className="row g-2 mt-3">
          <div className="col-8 ms-5">
            <input
              type="text"
              onChange={this.handleInput}
              value={this.state.userInput}
              className="form-control"
              placeholder="Enter your task"
            />
          </div>
          <div className="col-auto">
            <button className="btn btn-primary" onClick={this.addTaskList}>
              Add Task
            </button>
          </div>
        </div>
        <ul className="list-group mt-3">
          {this.state.taskList.map((val, index) => (
            <li key={index} className={`list-group-item border ms-5 me-7 m-2 d-flex justify-content-between align-items-center ${this.state.doneTasks[index] ? 'text-decoration-line-through' : ''}`}>
              <span>{val}</span>
              <div>
                <button className="btn btn-success" onClick={() => this.markTaskAsDone(index)}>
                  Done
                </button>
                <button className="btn btn-danger">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Todo;
