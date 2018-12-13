import React, { Component } from 'react'
import Routes from './Routes/routes.jsx'
import { ParallaxProvider } from 'react-scroll-parallax';
 

class App extends Component {
  render() {
    return (
      <div className="App">
      <ParallaxProvider>
        <Routes/>
      </ParallaxProvider>
      </div>    
    );
  }
}

export default App;
