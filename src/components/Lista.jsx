import React, { Component } from "react";
import "../css/lista.css";
import artistasReggaeton from "../listaJson/artistasReggaeton.json";

class Lista extends Component {
  state = {
    artistas: artistasReggaeton,
  };

  render() {
    return (
      <>
        <p className="texto-titulo">33 artistas cantan Reggaeton</p>
        <ul className="lista-menu">
        {this.state.artistas.map((elem, i) => {
          return (
              <li key={i}>
                <a href={elem.url}>{elem.name}</a>
              </li>
          );
        })}
          </ul>
      </>
    );
  }
}

export default Lista;
