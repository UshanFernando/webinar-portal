import React, { Component } from "react";
import NavBar from "../components/NavBar";
import HeaderHome from "../containers/HeaderHome";
import WebinarList from "../containers/WebinarList";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      webinars: null,
      programming: null,
      professional: null,
      cloud: null,
      business: null,
      engineering: null,
      other: null,
      searchQuery: "",
      placesFiltered: null,
    };
  }

  async componentDidMount() {
    this.loadWebinars();
  }
  render() {
    return (
      <div>
        <NavBar />
        <div className="container mt-4">
          <HeaderHome />
          <br />
          <h1 className="d-flex justify-content-center m-4">Browse Webinars</h1>
          <h3 className="font-weight-normal">
            <i className="fa fa-code"></i> Programming
          </h3>
          <WebinarList list={this.state.programming} />
          <br />
          <h3 className="font-weight-normal">
            <i className="fa fa-cloud"></i> Cloud
          </h3>
          <WebinarList list={this.state.cloud} />
          <br />
          <h3 className="font-weight-normal">
            <i className="fa fa-building"></i> Professional World
          </h3>
          <WebinarList list={this.state.professional} />
          <br />
          <h3 className="font-weight-normal">
            <i className="fa fa-suitcase"></i> Business
          </h3>

          <WebinarList list={this.state.business} />
          <br />
          <h3 className="font-weight-normal">
            <i className="fa fa-cog"></i> Engineering
          </h3>
          <WebinarList list={this.state.engineering} />
          <br />
          <h3 className="font-weight-normal">
            <i className="fa fa-modx"></i> Other
          </h3>
          <WebinarList list={this.state.other} />
          <br />
        </div>
      </div>
    );
  }

  loadWebinars = async () => {
    try {
      const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      };
      const res = await fetch(
        "http://localhost:5000/webinar/public",
        requestOptions
      );
      const data = await res.json();
      this.setState({
        webinars: data,
        programming: data.filter(this.filterProgramming),
        cloud: data.filter(this.filterCloud),
        professional: data.filter(this.filterProfessional),
        business: data.filter(this.filterBusiness),
        engineering: data.filter(this.filterEng),
        other: data.filter(this.filterOther),
      });
      console.log(this.state.webinars);
    } catch (e) {
      console.log(e);
    }
  };

  filterProgramming(event) {
    return event.category == "Programming";
  }
  filterCloud(event) {
    return event.category == "Cloud";
  }
  filterProfessional(event) {
    return event.category == "Professional";
  }
  filterBusiness(event) {
    return event.category == "Business";
  }
  filterEng(event) {
    return event.category == "Engineering";
  }
  filterOther(event) {
    return event.category == "Other";
  }
}

export default HomePage;
