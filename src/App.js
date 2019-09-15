import React, { Component } from 'react';
import './App.css';
import FirstNavbar from './Navbar/FirstNavbar'
import SecondNavbar from './Navbar/SecondNavbar'
import HomeDefault from './Home/Home Default/HomeDefault'
import Footer from './Footer/Footer'
class App extends Component{
  render(){
return (
  <div className="App">
    <FirstNavbar />
    <SecondNavbar />
    <Footer />
    <HomeDefault />
  </div>
);
}
}

export default App;