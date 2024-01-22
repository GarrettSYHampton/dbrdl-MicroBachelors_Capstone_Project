import "./bootstrap.min.css";
import React from "react";
import HomePage from "./homepage.js";
import ContactUs from "./contactus.js";

window.watsonAssistantChatOptions = {
  integrationID: "1408a783-f1de-45b6-86bd-ce141cdb5790", // The ID of this integration.
  region: "us-south", // The region your integration is hosted in.
  serviceInstanceID: "3644a3e6-236e-410c-9d7c-b61598f55481", // The ID of your service instance.
  onLoad: async (instance) => {
    await instance.render();
  },
};

setTimeout(function () {
  const t = document.createElement("script");
  t.src =
    "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" +
    (window.watsonAssistantChatOptions.clientVersion || "latest") +
    "/WatsonAssistantChatEntry.js";
  document.head.appendChild(t);
});

class App extends React.Component {
  state = {
    pageshown: <HomePage />,
  };

  setPageHome = () => {
    this.setState({ pageshown: <HomePage /> });
  };

  setPageContactUs = () => {
    this.setState({ pageshown: <ContactUs /> });
  };

  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="navbar-collapse" id="navbarTogglerDemo01">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
              <li class="nav-item active">
                <a class="nav-link" href="#" onClick={this.setPageHome}>
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" onClick={this.setPageContactUs}>
                  About Us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" onClick={this.setPageContactUs}>
                  FAQ
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" onClick={this.setPageContactUs}>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div>{this.state.pageshown}</div>
      </div>
    );
  }
}

export default App;
