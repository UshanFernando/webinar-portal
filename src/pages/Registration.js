import React, { Component } from "react";
import NavBar from "../components/NavBar";
import { Redirect } from "react-router-dom";

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      errText: "",
      redirect: false,
    };
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to="/login" />;
    }
    return (
      <div>
        <NavBar />
        <div className="container text-center mt-4 p-4">
          <div className="jumbotron">
            <h1 className="display-3">Registration</h1>
            <p className="lead">
              Register with our website and help students all around the world
              by sharing your valuble knowledge.
            </p>
          </div>
          <div className="space"></div>
          <form className="form-signin">
            <h1 className="h3 mb-3 font-weight-normal">
              Please Provide Your Details
            </h1>
            <div className="row d-flex justify-content-center">
              <div className="col col-lg-4 col-md-8 col-sm-8 col-xs-8 col-8 mt-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                  onChange={this.firstNameInputChange}
                  value={this.state.firstName}
                  required
                />
              </div>
              <div className="col col-lg-4 col-md-8 col-sm-8 col-xs-8 col-8 mt-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                  onChange={this.lastNameInputChange}
                  value={this.state.lastName}
                  required
                />
              </div>
              <div className="col col-lg-8 col-md-8 col-sm-8 col-xs-8 col-8 mt-2">
                <input
                  type="email"
                  id="inputEmail"
                  className="form-control mt-2"
                  placeholder="Email address"
                  value={this.state.email}
                  onChange={this.emailInputChange}
                  required
                />
                <input
                  type="password"
                  id="inputPassword"
                  className="form-control mt-2"
                  placeholder="Password"
                  onChange={this.passwordInputChange}
                  value={this.state.password}
                  required
                />
                {this.state.errText != "" ? (
                  <div className="col col-12 mt-3">
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
                <button
                  className="btn btn-lg btn-primary btn-block mt-2"
                  //   type="submit"
                  onClick={this.signUp}
                >
                  Sign UP
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
  firstNameInputChange = (e) => {
    this.setState({ firstName: e.target.value });
  };
  lastNameInputChange = (e) => {
    this.setState({ lastName: e.target.value });
  };
  emailInputChange = (e) => {
    this.setState({ email: e.target.value });
  };
  passwordInputChange = (e) => {
    this.setState({ password: e.target.value });
  };
  validateInput = () => {
    if (this.state.firstName.trim() == "") {
      this.setState({ errText: "First Name Field Can't be Empty!" });
      return false;
    } else if (this.state.lastName.trim() == "") {
      this.setState({ errText: "Last Name Field Can't be Empty!" });

      return false;
    } else if (this.state.email.trim() == "") {
      this.setState({ errText: "Email Field Can't be Empty!" });

      return false;
    } else if (
      this.state.password.trim() == "" ||
      this.state.password.length < 6
    ) {
      this.setState({
        errText: "Password should contain atleast 6 characters!",
      });

      return false;
    }
    this.setState({
      errText: "",
    });
    return true;
  };

  signUp = async (event) => {
    event.preventDefault();
    const isValid = this.validateInput();
    if (isValid) {
      console.log(this.state);
      try {
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fname: this.state.firstName,
            lname: this.state.lastName,
            email: this.state.email.toLowerCase(),
            password: this.state.password,
          }),
        };
        const res = await fetch(
          "http://localhost:5000/register/new",
          requestOptions
        );
        const data = await res.json();

        console.log(data);
        if (data.hasOwnProperty("error")) {
          this.setState({
            errText: data.error,
          });
        } else {
          this.setState({
            fname: "",
            lname: "",
            email: "",
            password: "",
            redirect: true,
          });
        }
      } catch (e) {
        console.log(e);
      }
      //   this.setState({
      //     redirect: true,
      //   });
    }
  };
}

export default Registration;
