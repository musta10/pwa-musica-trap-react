import React, { Component } from "react";
import logo from "../assets/logo/palmeracirculo.png";
import "../css/header.css"
import Tabs from "./Tabs"
import Trap from "./Trap"
import Lista from "./Lista"


class Header extends Component {
    render() {
      return (
        <>
          <nav className="nav-bar">
            {/* EL LOGO */}
            <div id="logo">
              <img src={logo} alt="Logotipo" width="40" height="40" />
              <span id="brand">
                <strong>Trap</strong>Family
              </span>
            </div>
            <div className="texto-titulo">
              <p>
                Musica <strong>Trap</strong> y Drill
              </p>
            </div>
          </nav>
          <Tabs> 
         <div label="Trap"> 
         <Trap />
         </div> 
         <div label="Reggaeton"> 
           <Lista />
         </div> 
         <div label="Lanueva"> 
           {/* <Lanueva /> */}
         </div> 
         <div label="Top 5"> 
          {/* <Topmusic /> */}
         </div> 
       </Tabs> 
        </>
      );
    }
  }
  
  export default Header;