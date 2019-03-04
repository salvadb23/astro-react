import React, { Component } from 'react';
import Astronauts from './components/Astronauts'
import Navigation from './components/Navigation'
import logo from './logo.svg';
import './App.css';




class App extends Component {

  constructor(props){
    super(props)

    this.state = { astronauts: null }
  }

  componentDidMount () {
    const url = "http://api.open-notify.org/astros.json";
    
    fetch(url).then(res =>{
      return res.json()
    }).then((json) => {
      this.setState({ astronauts: json })
    })
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <div className="wrapper">
          <div className="title">Who is in space</div>
          <div className="container">
            <Astronauts astronauts={this.state.astronauts} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
