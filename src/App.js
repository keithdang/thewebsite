import React, { Component } from "react";
import logo from "./images/react-logo.svg";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import "./App.less";
import Welcome from "./components/welcome";
import Background from "./images/grey2.png";
import Navigation from "./components/navigationBar";
import Employment from "./components/employment";
import Skills from "./components/skills";
import Secondary from "./components/secondary";
import Personal from "./components/personal";
import SchoolProjects from "./components/schoolProjects";
import Dance from "./components/dance";
import University from "./components/university";
import Footer from "./components/footer";
var backgroundStyle = {
  width: "100%",
  backgroundImage: `url(${Background})`
};
class App extends Component {
  render() {
    return (
      <div>
        <section style={backgroundStyle}>
          <BrowserRouter>
            <div>
              <Navigation />
              <div>
                <img src={logo} className="reactLogo" />
              </div>
              <Route exact path="/" component={Welcome} />
              <Route exact path="/employment" component={Employment} />
              <Route exact path="/university" component={University} />
              <Route exact path="/secondary" component={Secondary} />
              <Route exact path="/skills" component={Skills} />
              <Route exact path="/dance" component={Dance} />
              <Route exact path="/personal" component={Personal} />
              <Route exact path="/schoolProjects" component={SchoolProjects} />
              <Footer />
            </div>
          </BrowserRouter>
        </section>
      </div>
    );
  }
}

export default App;
