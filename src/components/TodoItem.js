import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {

  getStyle = () => {
    return {
      backgroundColor: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  render() {
    const { title, id } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" name="checkbox" id="checkbox" onChange={this.props.markComplete.bind(this, id)}/>
          { title }
          <button style={btnStyle} onClick={this.props.deleteTodo.bind(this, id)}>x</button>
          </p>
      </div>
     
    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
}

const btnStyle = {
  backgroundColor: 'red',
  color: 'white',
  border: 'none',
  padding: '5px 8px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

export default TodoItem;