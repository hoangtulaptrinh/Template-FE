import React, { Component } from 'react';
import './App.css';
import FirstNavbar from './Navbar/FirstNavbar'
import SecondNavbar from './Navbar/SecondNavbar'
import Slide from './Home/Home Default/Slide'

class App extends Component{
  render(){
return (
  <div className="App">
    <FirstNavbar />
    <SecondNavbar />
    <Slide />
  </div>
);
}
}

export default App;