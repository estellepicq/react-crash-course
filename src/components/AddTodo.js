import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddTodo extends Component {

  state = {
    newTodoTitle: ''
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  
  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.newTodoTitle);
    this.setState({ newTodoTitle: '' });
  }

  render() {
    return (
      <form style={{display: 'flex'}} onSubmit={this.onSubmit}>
        <input type="text"
          name="newTodoTitle"
          style={{flex: '10', padding: '5px'}}
          placeholder="Add Todo..."
          value={this.state.newTodoTitle}
          onChange={this.onChange}
        />
        <input type="submit"
          value="Submit"
          className="btn"
          style={{flex: '1'}}
        />
      </form>
    )
  }
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
}

export default AddTodo;