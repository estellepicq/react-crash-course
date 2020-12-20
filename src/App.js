
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Axios from 'axios';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layouts/Header';
import About from './components/pages/About';
import './App.css';

class App extends Component {
  state = {
    todos: []
  };

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => ({
        ...todo,
        completed: todo.id === id ? !todo.completed : todo.completed
      }))
    });
  }

  deleteTodo = (id) => {
    Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => {
      this.setState({
        todos: this.state.todos.filter(todo => todo.id !== id)
      });
    });
  }

  addTodo = (title) => {
    Axios.post('https://jsonplaceholder.typicode.com/todos', { title, completed: false })
      .then(res => {
        this.setState({ todos: [...this.state.todos, res.data]});
      });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo}/>
                <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo}/>
              </React.Fragment>
            )}/>
            <Route path="/about" component={About}/>
          </div>
        </div>
      </BrowserRouter>
    );
  }

  componentDidMount() {
    Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => {
        this.setState({ todos: res.data });
      });
  }
}

export default App;
