import React, { Component } from "react";
import "../css/trap.css";
import artistasTrap from "../listaJson/artistasTrap.json"


class Trap extends Component {
  state = {
    artistas: artistasTrap
  }
  render() {
    return (
      <>
        <h3 className="texto-titulo">Quien es el Rey del Trap?</h3>
        <p className="texto-titulo">21 artistas cantan Trap</p>
        <ul className="menu">
          {this.state.artistas.map((elem, i ) => {
            return (
              <li key={i}>
              <a href={elem.url}>{elem.name}</a>
            </li>
            )
          })}
        </ul>
      </>
    );
  }
}

export default Trap;
