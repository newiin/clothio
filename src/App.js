import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/homepage/homepage-component";
import Shop from "./pages/shop/shop-component";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/shop" exact component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
