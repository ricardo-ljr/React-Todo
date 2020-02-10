import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      input: " "
    };
  }

  handleChanges = e => {
    this.setState({ input: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ input: "" });
    this.props.addTodo(this.state.input);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          id="filled-basic"
          label="Add ToDo..."
          variant="filled"
          value={this.state.input}
          type="text"
          name="input"
          onChange={this.handleChanges}
        />
        <br />
        <br />
        <Button variant="outlined">Add Todo</Button>
      </form>
    );
  }
}
