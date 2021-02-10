import React, { Component } from "react";
import NavBar from "../components/NavBar";
class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      redirect: false,
    };
  }
  render() {
    return (
      <div>
        <NavBar />
        <div className="container text-center mt-4">
          <div class="jumbotron">
            <h1 class="display-3">Registration</h1>
            <p class="lead">
              Register with our website and help students all around the world
              by sharing your valuble knowledge.
            </p>
          </div>
          <div className="space"></div>
          <form className="form-signin">
            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
            <label className="sr-only">Email address</label>
            <input
              type="email"
              id="inputEmail"
              className="form-control"
              placeholder="Email address"
              value={this.state.email}
              //   onChange={this.emailInputChange}
              required
            />
            <label className="sr-only">Password</label>
            <input
              type="password"
              id="inputPassword"
              className="form-control"
              placeholder="Password"
              //   onChange={this.passwordInputChange}
              value={this.state.password}
              required
            />
            <button
              className="btn btn-lg btn-primary btn-block"
              type="submit"
              onClick={this.login}
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Registration;
