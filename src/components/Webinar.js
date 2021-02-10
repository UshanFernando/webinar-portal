import React from "react";
import "./Webinar.css";
import zoomLogo from "../assets/zoom.png";
import teamsLogo from "../assets/teams.png";
import webexLogo from "../assets/webex.png";

function Webinar(props) {
  var logo = zoomLogo;
  var theme = "info";

  if (props.platform == "Teams") {
    logo = teamsLogo;
    theme = "primary";
  } else if (props.platform == "Webex") {
    logo = webexLogo;
    theme = "success";
  }
  return (
    <div className={"card border-" + theme + " mb-3 webinar"}>
      <div className="card-body">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text">
          Date : <strong> {props.date}</strong>
          <br />
          Time : <strong> {props.time}</strong>
          <br />
          Duration : <strong> {props.duration}</strong>
        </p>
        <span className="card-text">
          Category : <strong> {props.category}</strong>
        </span>
        <br />
        <p className="card-text">
          Password : <strong>{props.password}</strong>
        </p>
        <a className={"btn btn-" + theme} href={props.url} target="_blank">
          <i className="fa fa-plus"></i> Join
        </a>
        {props.edit ? (
          <button className={"btn btn-danger ml-2"} onClick={props.delete}>
            <i className="fa fa-trash"></i> Delete
          </button>
        ) : null}
      </div>
      <div className="card-header">
        <img height="30" src={logo} />
      </div>
    </div>
  );
}

export default Webinar;
