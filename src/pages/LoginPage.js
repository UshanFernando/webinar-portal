import React, { Component } from "react";
import NavBar from "../components/NavBar";
import { Redirect } from "react-router-dom";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errText: "",
      redirect: false,
    };
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to="/home" />;
    }
    return (
      <div>
        <NavBar />
        <div className="container text-center mt-4">
          <div className="jumbotron">
            <h1 className="display-3">Welcome Back</h1>
            <p className="lead">We Appriciate your hardwork to share knownledge</p>
          </div>
          <div className="space"></div>
          <form className="form-signin">
            <h1 className="h3 mb-3 font-weight-normal">Login</h1>
            <div className="row d-flex justify-content-center">
              <div className="col col-5 mt-2 ml-5 mr-5">
                <input
                  type="email"
                  id="inputEmail"
                  className="form-control"
                  placeholder="Email address"
                  value={this.state.email}
                  onChange={this.emailInputChange}
                  required
                />
                
              </div>
              <div className="col col-5 mt-2 ml-5 mr-5">
              <input
                  type="password"
                  id="inputPassword"
                  className="form-control"
                  placeholder="Password"
                  onChange={this.passwordInputChange}
                  value={this.state.password}
                  required
                />
              </div>
              {this.state.errText != "" ? (
                <div className="col col-6 mt-3 ">
                  <div className="alert alert-dismissible alert-danger">
                    <button type="button" className="close" data-dismiss="alert">
                      &times;
                    </button>
                    <strong>Oh snap!</strong>{" "}
                    <a href="#" className="alert-link">
                      {this.state.errText}
                    </a>
                  </div>
                </div>
              ) : null}
              <div className="col col-5 mt-3 ml-5 mr-5 mb-5">
                <button
                  className="btn btn-lg btn-primary btn-block"
                  //   type="submit"
                  onClick={this.login}
                >
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }

  emailInputChange = (e) => {
    this.setState({ email: e.target.value });
  };
  passwordInputChange = (e) => {
    this.setState({ password: e.target.value });
  };
  validateInput = () => {
    if (this.state.email.trim() == "") {
      this.setState({ errText: "Email Field Can't be Empty!" });
      return false;
    } else if (this.state.password.trim() == "") {
      this.setState({ errText: "Password Field Can't be Empty!" });

      return false;
    }
    this.setState({
      errText: "",
    });
    return true;
  };

  login = async (event) => {
    event.preventDefault();
    if (this.validateInput()) {
      try {
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: this.state.email.toLowerCase(),
            password: this.state.password,
          }),
        };
        const res = await fetch(
          "http://localhost:5000/login/login",
          requestOptions
        );

        const data = await res.json();

        if (data.hasOwnProperty("accessToken")) {
          localStorage.setItem("token", data.accessToken);
          this.setState({
            redirect: true,
          });
        } else {
          this.setState({
            errText: "Invalid Login Detials!",
          });
        }
      } catch (e) {
        console.log(e);
      }
    }
  };
}

export default LoginPage;
