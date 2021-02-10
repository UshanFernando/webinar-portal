import React from "react";
import Webinar from "../components/Webinar";
import Auth from "../authentication/Auth";
function WebinarList(props) {
  return (
    <div className="container ">
      <div className="row">
        {props.list == null || props.list.length == 0
          ? "Sorry No Webinars Availible!"
          : props.list.map((item) => {
              return (
                <div
                  key={item._id}
                  className="col-xs-12 col-sm-5 col-md-4 col-lg-3 m-2 d-flex justify-content-center"
                >
                  <Webinar
                    title={item.title}
                    category={item.category}
                    date={item.date}
                    time={item.time}
                    duration={item.duration}
                    password={item.password}
                    platform={item.platform}
                    url={item.url}
                    edit={Auth.isAuthenticated() && props.edit}
                    delete={() => props.delete(item._id)}
                    update={() => props.update(item)}
                  />
                </div>
              );
            })}
      </div>
    </div>
  );
}

export default WebinarList;
