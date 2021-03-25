import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Header />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
