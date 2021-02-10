import React, { Component } from "react";
import NavBar from "../components/NavBar";
import HeaderHome from "../containers/HeaderHome";
import WebinarList from "../containers/WebinarList";

class HomePage extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container mt-4">
                <HeaderHome />
                <h1 className="d-flex justify-content-center m-4">Browse Webinars</h1>
                <h3>Happening Now</h3>
                <WebinarList/>
                <h3>Coming UP</h3>
                <h4>Ended</h4>
        </div>
      </div>
    );
  }
}

export default HomePage;
