import React from "react";

function HeaderHome() {
  return (
    <div className="jumbotron">
      <h1 className="display-3">Welcome to Webinar Portal</h1>
      <p className="lead">
        Find onilne webinars of many topics in one place 
      </p>
      <hr className="my-4" />
      <p> If you are a fashionate teacher who likes to share your knowledge to the world
       join us and share your own webinar to people all around the world!
      </p>
      <p className="lead">
        <a className="btn btn-primary btn-lg" href="#" role="button">
         Register Now  
        </a>
      </p>
    </div>
  );
}

export default HeaderHome;
