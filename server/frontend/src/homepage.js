import "./bootstrap.min.css";
import React from "react";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <div style={{ display: "flex" }}>
          <img src="/cardealership.jpeg" style={{ width: "300px" }} />
          <div style={{ margin: "100px" }}>
            <div className="jumbotron">
              <h1 className="display-4">Welcome To Our Dealserhip!</h1>
              <p className="lead">
                Please feel free to use our chat-bot on the bottom right to
                schedule appointments or ask questions.
              </p>
              <hr className="my-4" />
              <p>
                It uses AI from IBM WatsonX to answer your questions and
                schedule appointments.
              </p>
              <p className="lead">
                <a className="btn btn-primary btn-lg" href="#" role="button">
                  Learn more
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
