import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    text: "Wpisz datę",
    error: "not found"
  }

  handleDateChange = (e) => {
    const value = this.refs.number.value;
    console.log(value);
    // fetch(`https://www.songsterr.com/a/ra/songs.xml?pattern=${value}`)
    fetch(`http://numbersapi.com/${value}/year?json`)
      .then(res => {

        if(res.ok) {
          return res
        }
        throw Error(res.statusText)
        
      })
      .then(res => res.json())
      .then(data => this.setState({
        text: data.text
      }))
      
      .catch(err => {
        this.setState({text: "Jest problem :( " + err})
      })
  }

  render() {
    return (
      <div>
        <input onChange={this.handleDateChange} type="text" ref="number" />
        <p>W tym roku: {this.state.text} </p>
      </div>
    );
  }
}

export default App; 
