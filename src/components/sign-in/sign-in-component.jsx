import React, { Component } from "react";
import "./sign-in-styles.scss";
import FormInput from "../form-input/form-input-component";
import Button from "../custom-buttom/custom-buttonn-component";
import { SignInWithGoogle } from "../../firebase/firebase-utils";
class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      email: "",
      password: ""
    });
  };
  handleChange = e => {
    const { value, name } = e.target;

    this.setState({
      [name]: value
    });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I have already an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            handleChange={this.handleChange}
            name="email"
            value={this.state.email}
            label="email"
          />

          <FormInput
            type="password"
            name="password"
            handleChange={this.handleChange}
            value={this.state.password}
            label="password"
          />
          <div className="buttons">
            <Button type="submit">Sign In</Button>
            <Button onClick={SignInWithGoogle} isGoogleSign>
              Sign In With google
            </Button>
          </div>
        </form>
      </div>
    );
  }
}
export default SignIn;
