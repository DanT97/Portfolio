import React, { Component } from 'react';

import Home from '../Componentes/home/home.jsx'
import Foot from '../Componentes/footer/footer'
import Navbar from '../Componentes/navbar/navbar.jsx'
import SideDrawer from '../Componentes/sideDrawer/sideDrawer.jsx'
import Backdrop from '../Componentes/backdrop/backdrop.jsx'

class Main extends Component {
    state = {
        sideDrawerOpen: false
      };
    
      drawerToggleClickHandler = () => {
        this.setState((prevState) => {
          return {sideDrawerOpen: !prevState.sideDrawerOpen};
        });
      };
    
      backdropClickHandler = () => {
        this.setState({sideDrawerOpen: false})
      }
    
      render() {
        let backdrop;
    
        if (this.state.sideDrawerOpen){
       
          backdrop = <Backdrop click={this.backdropClickHandler}/>
        }
  
    return (
      <div className="Main">
      
       <Navbar drawerClickHandler={this.drawerToggleClickHandler}/>
                <SideDrawer show={this.state.sideDrawerOpen}/>
                {backdrop}
        <Home/>
        <footer>
          <Foot/>
      </footer>
      </div>    
    );
  }
}

export default Main;
