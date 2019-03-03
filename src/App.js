import React, { Component } from 'react';
import './App.css';
import Nav from './components/Navbar'
import Tab from './components/Tab'
import CardIssue from './components/Card'

class App extends Component {
  state={

  }

  componentDidMount() {
    fetch('https://api.github.com/repos/angular/angular/issues')
      .then(response => response.json())
      .then(data => this.setState({
        data
      }))
  }
  
  render() {
    return (
      <div>
        <Nav />
        <Tab />
        <CardIssue />
        {console.log(this.state)}
      </div>
    );
  }
}

export default App;
