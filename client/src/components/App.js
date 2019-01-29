import React, { Component } from 'react';
import '../styles/App.css';
import Header from './Header';
import Movies from './Movies';

class App extends Component {
  state = {
    page: 0
  }
  render() {
    return (  
      <div>
        <Header/>
        <Movies/>  
      </div> 
    );  
  }
}

export default App;
