import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { auth } from "./firebase/firebase-utils";
import "./App.css";
import Home from "./pages/homepage/homepage-component";
import Shop from "./pages/shop/shop-component";
import Header from "./components/header/header-component";
import SignSignup from "./pages/sign-signup/sign-in-sign-up-component";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    };
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(this.state.currentUser);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/auth" exact component={SignSignup} />
        </Switch>
      </div>
    );
  }
}

export default App;
