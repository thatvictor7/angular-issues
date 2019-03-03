import React, { Component } from 'react';
import './App.css';
import Nav from './components/Navbar'
import Tab from './components/Tab'
import CardsComposer from './components/CardsComposer'
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";


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
        {this.state.data ?  <Tab count={this.state.data}/> : null}
        {this.state.data ?  <CardsComposer data={this.state.data} /> : null}
        <ScrollUpButton />
      </div>
    );
  }
}

export default App;
