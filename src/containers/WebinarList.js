import React from "react";
import Webinar from "../components/Webinar";
function WebinarList() {
  return (
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="col-xs-12 col-sm-5 col-md-4 col-lg-3 m-3 d-flex justify-content-center">
          <Webinar
            title="Flutter Introduction"
            category="Programming"
            id="123 456"
            password="cUnsjU"
            platform="zoom"
          />
        </div>
        <div class="col-xs-12 col-sm-5 col-md-4 col-lg-3 m-3 d-flex justify-content-center">
          <Webinar
            title="Flutter Introduction"
            category="Programming"
            id="123 456"
            password="cUnsjU"
            platform="webex"
                      date="2021-02-11"
                      time="12:24 PM"
          />
        </div>
        <div class="col-xs-12 col-sm-5 col-md-4 col-lg-3 m-3 d-flex justify-content-center">
          <Webinar
            title="Flutter Introduction"
            category="Programming"
            id="123 456"
            password="cUnsjU"
            platform="teams"
          />
        </div>
      </div>
    </div>
  );
}

export default WebinarList;
