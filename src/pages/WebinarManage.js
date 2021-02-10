import React, { Component } from "react";
import PropTypes from "prop-types";
import NavBar from "../components/NavBar";
import Wrapper from "../hoc/Wrapper";
import Webinar from "../components/Webinar";
import Auth from "../authentication/Auth";
import WebinarList from "../containers/WebinarList";

class WebinarManage extends Component {
  static propTypes = {};
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      category: "category",
      date: "",
      time: "",
      duration: "",
      url: "",
      meetingId: "",
      password: "",
      platform: "platform",
      errText: "",
      preview: false,
      webinars: null,
      updateEn: false,
      updateId: "",
    };
  }
  async componentDidMount() {
    this.loadWebinars();
  }
  render() {
    return (
      <Wrapper>
        <NavBar />
        <div className="container">
          <div className="jumbotron">
            <h1 className="display-3">
              <i className="fa fa-cog"></i> Manage Your Webinars
            </h1>
            <p className="lead">
              We Appriciate your hardwork to share knownledge
            </p>
          </div>

          <h2 className="font-weight-normal">
            <i className="fa fa-plus"></i> Add New Webinar
          </h2>
          <div className="row">
            <div className="col-6 mt-2">
              <input
                type="text"
                className="form-control"
                placeholder="Title"
                id="titleInput"
                onChange={this.titleInputChange}
                value={this.state.title}
              />
            </div>
            <div className="col-6 mt-2">
              <select
                className="form-control"
                id="categoryInput"
                onChange={this.categoryInputChange}
                value={this.state.category}
              >
                <option>Category</option>
                <option>Programming</option>
                <option>Cloud</option>
                <option>Professional</option>
                <option>Business</option>
                <option>Engineering</option>
                <option>Other</option>
              </select>
            </div>
            <div className="col-6 mt-2">
              <input
                type="date"
                className="form-control"
                placeholder="Date"
                id="dateInput"
                onChange={this.dateInputChange}
                value={this.state.date}
              />
            </div>
            <div className="col-6 mt-2">
              <input
                type="time"
                className="form-control"
                placeholder="Time"
                id="timeInput"
                onChange={this.timeInputChange}
                value={this.state.time}
              />
            </div>
            <div className="col-6 mt-2">
              <input
                type="number"
                className="form-control"
                placeholder="Duration"
                id="durationInput"
                onChange={this.durationInputChange}
                value={this.state.duration}
              />
            </div>

            <div className="col-6 mt-2">
              <input
                type="text"
                className="form-control"
                placeholder="Meeting Password"
                id="passwordInput"
                onChange={this.meetingPasswordInputChange}
                value={this.state.password}
              />
            </div>

            <div className="col-6 mt-2">
              <select
                className="form-control"
                id="exampleSelect1"
                onChange={this.meetingPlatformInputChange}
                value={this.state.platform}
              >
                <option>Platform</option>
                <option>Zoom</option>
                <option>Webex</option>
                <option>Teams</option>
              </select>
            </div>
            <div className="col-6 mt-2">
              <input
                type="text"
                className="form-control"
                placeholder="Meeting URL"
                id="inputDefault"
                onChange={this.meetingUrlInputChange}
                value={this.state.url}
              />
            </div>
            {this.state.errText != "" ? (
              <div className="col col-8 mt-3">
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
            <div className="col-8 mt-3 mb-4">
              {this.state.preview ? (
                <Webinar
                  title={this.state.title}
                  category={this.state.category}
                  date={this.state.date}
                  time={this.state.time}
                  duration={this.state.duration}
                  platform={this.state.platform}
                  password={this.state.password}
                />
              ) : null}
              {this.state.preview ? (
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={
                    this.state.updateEn ? this.updateWebinar : this.postWebinar
                  }
                >
                  <i className="fa fa-check-circle"></i> Confirm Webinar
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-primary"
                  id="postbtn"
                  onClick={this.validateInput}
                >
                  {this.state.updateEn ? "Update Webinar" : "Post Webinar"}
                  <i className="fa fa-location-arrow"></i>
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="container">
          <h2 className="font-weight-normal">
            <i className="fa fa-list-alt"></i> Your Webinars
          </h2>

          <WebinarList
            list={this.state.webinars}
            delete={this.deleteWebinar}
            update={this.handleWebinarUpdate}
            edit={true}
          />
        </div>
      </Wrapper>
    );
  }
  titleInputChange = (e) => {
    this.setState({ title: e.target.value });
  };
  categoryInputChange = (e) => {
    this.setState({ category: e.target.value });
  };
  dateInputChange = (e) => {
    this.setState({ date: e.target.value });
  };
  timeInputChange = (e) => {
    this.setState({ time: e.target.value });
  };
  durationInputChange = (e) => {
    this.setState({ duration: e.target.value });
  };
  meetingPasswordInputChange = (e) => {
    this.setState({ password: e.target.value });
  };
  meetingUrlInputChange = (e) => {
    this.setState({ url: e.target.value });
  };
  meetingPlatformInputChange = (e) => {
    this.setState({ platform: e.target.value });
  };

  validateInput = () => {
    if (this.state.title.trim() == "") {
      this.setState({ errText: "Title Field Can't be Empty!" });
      return false;
    } else if (this.state.category.toLowerCase() == "category") {
      this.setState({ errText: "Category Field Can't be Empty!" });
      return false;
    } else if (this.state.date.trim() == "") {
      this.setState({ errText: "Date Field Can't be Empty!" });
      return false;
    } else if (this.state.time.trim() == "") {
      this.setState({ errText: "Time Field Can't be Empty!" });
      return false;
    } else if (
      this.state.duration == null ||
      this.state.duration == 0 ||
      this.state.duration == ""
    ) {
      this.setState({ errText: "Duration Field Can't be Empty!" });
      return false;
    } else if (this.state.password.trim() == "") {
      this.setState({ errText: "Password Field Can't be Empty!" });
      return false;
    } else if (this.state.platform.toLowerCase() == "platform") {
      this.setState({ errText: "Platform Field Can't be Empty!" });
      return false;
    } else if (this.state.url.trim() == "") {
      this.setState({ errText: "URL Field Can't be Empty!" });
      return false;
    }
    this.setState({
      preview: true,
      errText: "",
    });
    return true;
  };
  postWebinar = async () => {
    if (this.validateInput()) {
      try {
        const requestOptions = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            token: Auth.getToken(),
          },
          body: JSON.stringify({
            title: this.state.title,
            category: this.state.category,
            date: this.state.date,
            time: this.state.time,
            platform: this.state.platform,
            url: this.state.url,
            password: this.state.password,
            duration: this.state.duration,
          }),
        };
        const res = await fetch(
          "http://localhost:5000/webinar/public",
          requestOptions
        );
        const data = await res.json();

        if (data.hasOwnProperty("_id")) {
          this.setState({
            title: "",
            category: "category",
            date: "",
            time: "",
            duration: "",
            url: "",
            meetingId: "",
            password: "",
            platform: "platform",
            errText: "",
            preview: false,
          });
          alert("Webinar Added Successfully!");
          this.loadWebinars();
        } else {
          alert("Error while adding Station !!! \n Plz recheck input!!!");
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      this.setState({ preview: false });
    }
  };
  loadWebinars = async () => {
    try {
      const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json", token: Auth.getToken() },
      };
      const res = await fetch(
        "http://localhost:5000/webinar/private",
        requestOptions
      );
      const data = await res.json();
      console.log(data);
      if (data.hasOwnProperty("error")) {
        this.setState({ webinars: null });
      } else {
        this.setState({ webinars: data });
      }
      this.setState({
        webinars: data,

        // placesFiltered: data,
      });
      console.log("called set staea");
      console.log(this.state.webinars);
    } catch (e) {
      console.log(e);
    }
  };
  deleteWebinar = async (id) => {
    try {
      const requestOptions = {
        method: "DELETE",
        headers: { "Content-Type": "application/json", token: Auth.getToken() },
        body: JSON.stringify({ id: id }),
      };
      await fetch("http://localhost:5000/webinar/private", requestOptions);
      this.loadWebinars();
    } catch (e) {
      console.log(e);
    }
  };
  handleWebinarUpdate = (x) => {
    this.setState({
      updateEn: true,
      updateId: x._id,
      title: x.title,
      category: x.category,
      date: x.date,
      time: x.time,
      duration: x.duration,
      url: x.url,
      password: x.password,
      platform: x.platform,
    });
  };
  updateWebinar = async () => {
    if (this.validateInput) {
      try {
        const requestOptions = {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            token: Auth.getToken(),
          },
          body: JSON.stringify({
            id: this.state.updateId,
            title: this.state.title,
            category: this.state.category,
            date: this.state.date,
            time: this.state.time,
            platform: this.state.platform,
            url: this.state.url,
            password: this.state.password,
            duration: this.state.duration,
          }),
        };
        const data = await fetch(
          "http://localhost:5000/webinar/private",
          requestOptions
        );
        console.log(data);
        this.loadWebinars();
        this.setState({
          title: "",
          category: "category",
          date: "",
          time: "",
          duration: "",
          url: "",
          meetingId: "",
          password: "",
          platform: "platform",
          errText: "",
          preview: false,
          updateEn: false,
        });
      } catch (e) {
        console.log(e);
      }
    } else {
    }
  };
}

export default WebinarManage;
