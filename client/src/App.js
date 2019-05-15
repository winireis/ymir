import React, { Component } from 'react'
import './App.css';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
     message: [],
    }
  }

  componentDidMount() {
    fetch('/api/hello')
      .then(response => response.json())
      .then(data => this.setState({ message: data.message }));
  }

  render () {
    const { message } = this.state
    return (
        <h1>{message}</h1>
    );
  }
}

export default App;
