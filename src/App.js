import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import Todo from "./components/TodoComponents/Todo";
import TodoList from "./components/TodoComponents/TodoList";
import "./components/TodoComponents/Todo.css";

const todos = [{}];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todosList: todos
    };
  }

  addTodo = todo => {
    const newTodo = {
      task: todo,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todosList: [...this.state.todosList, newTodo]
    });
  };

  toggleItem = clickedId => {
    const newTodoList = this.state.todosList.map(item => {
      if (item.id === clickedId) {
        return {
          ...item,
          completed: !item.completed
        };
      } else {
        return item;
      }
    });

    this.setState({
      todosList: newTodoList
    });
  };

  deleteTodo = event => {
    event.preventDefault();
    const deletedTodos = this.state.todosList.filter(todo => !todo.completed);
    this.setState({
      todosList: deletedTodos
    });
  };

  render() {
    return (
      <div className="App">
        <h2>Welcome to My Todo App!</h2>
        <TodoForm addTodo={this.addTodo} />
        <TodoList
          todos={this.state.todosList}
          toggleItem={this.toggleItem}
          deleteTodo={this.deleteTodo}
        />
      </div>
    );
  }
}

export default App;
