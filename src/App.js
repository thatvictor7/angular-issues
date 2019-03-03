import React, { Component } from 'react';
import './App.css';
import Nav from './components/Navbar'
import Tab from './components/Tab'
import CardIssue from './components/Card'
import CardsComposer from './components/CardsComposer'


class App extends Component {
  state={
    
  }

  async componentDidMount() {
    let res = await fetch('https://api.github.com/repos/angular/angular/issues')
    let jsonRes = await res.json()
    this.setState({
      data: jsonRes
    })
  }

  
  
  render() {
    return (
      <div>
        <Nav />
        <Tab />
        {/* <CardIssue /> */}
        {this.state.data ?  <CardsComposer data={this.state.data}/> : null}
        {/* {console.log(this.state)} */}
      </div>
    );
  }
}

export default App;
