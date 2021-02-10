import React from "react";
import "./Webinar.css";
import zoomLogo from "../assets/zoom.png";
import teamsLogo from "../assets/teams.png";
import webexLogo from "../assets/webex.png";

function Webinar(props) {
  var logo = zoomLogo;
  var theme = "info";

  if (props.platform == "teams") {
    logo = teamsLogo;
    theme = "primary";
  } else if (props.platform == "webex") {
    logo = webexLogo;
    theme = "success";
  }
  return (
    <div class={"card border-" + theme + " mb-3 webinar"}>
      <div class="card-body">
        <h4 class="card-title">{props.title}</h4>
        <p class="card-text">
          Date : <strong> {props.date}</strong>
          <br />
          Time : <strong> {props.time}</strong>
          <br />
          Duration : <strong> {props.duration}</strong>
        </p>
        <span class="card-text">
          Category : <strong> {props.category}</strong>
        </span>
        <br />
        <span class="card-text">
          Meeting ID: <strong>{props.id}</strong>
        </span>
        <p class="card-text">
          Password: <strong>{props.password}</strong>
        </p>
        <button className={"btn btn-" + theme}>Open</button>
      </div>
      <div class="card-header">
        <img height="30" src={logo} />
      </div>
    </div>
  );
}

export default Webinar;
