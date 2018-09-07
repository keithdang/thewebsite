import React, { Component } from "react";
import { Link } from "react-router-dom";
import facebook from "../images/png/001-facebook-logo-button.png";
import instagram from "../images/png/003-instagram.png";
import github from "../images/png/005-github-logo.png";
import linkedin from "../images/png/007-linkedin-logo.png";
import businessCard from "../images/png/businessCard.png";
class Footer extends Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.toggleHoverState = this.toggleHoverState.bind(this);
    this.handlePhoneHover = this.handlePhoneHover.bind(this);
    this.togglePhoneState = this.togglePhoneState.bind(this);
    this.handleEmailHover = this.handleEmailHover.bind(this);
    this.toggleEmailState = this.toggleEmailState.bind(this);
    this.state = { showInfo: false, showPhoneNumber: false, showEmail: false };
  }
  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      showInfo: !state.showInfo
    };
  }
  handlePhoneHover() {
    this.setState(this.togglePhoneState);
  }

  togglePhoneState(state) {
    return {
      showPhoneNumber: !state.showPhoneNumber
    };
  }
  handleEmailHover() {
    this.setState(this.toggleEmailState);
  }

  toggleEmailState(state) {
    return {
      showEmail: !state.showEmail
    };
  }
  renderLogoList() {
    return (
      <ul className="iconLists" style={{ textAlign: "right" }}>
        <li
          onMouseEnter={this.handlePhoneHover}
          onMouseLeave={this.handlePhoneHover}
          className="iconLists6"
        >
          {this.state.showPhoneNumber && (
            <p style={{ float: "left", paddingTop: "15px" }}>438-887-1994</p>
          )}
          <i className="material-icons">local_phone</i>
        </li>
        <li
          onMouseEnter={this.handleEmailHover}
          onMouseLeave={this.handleEmailHover}
          className="iconLists5"
        >
          {this.state.showEmail && (
            <p style={{ float: "left", paddingTop: "15px" }}>
              keith.dang11@gmail.com
            </p>
          )}
          <i className="material-icons">email</i>
        </li>
        <li className="iconLists4">
          <a href="https://www.facebook.com/keith.dang">
            <img src={facebook} />
          </a>
        </li>
        <li className="iconLists3">
          <a href="https://www.instagram.com/paradime.shift/">
            <img src={instagram} />
          </a>
        </li>
        <li className="iconLists2">
          <a href="https://github.com/keithdang">
            <img src={github} />
          </a>
        </li>
        <li className="iconLists1">
          <a href="https://www.linkedin.com/in/keith-dang-60a27681/">
            <img src={linkedin} />
          </a>
        </li>
      </ul>
    );
  }
  render() {
    return (
      <div
        onMouseEnter={this.handleMouseHover}
        onMouseLeave={this.handleMouseHover}
      >
        <div className="footerInfo">
          {this.state.showInfo && this.renderLogoList()}
        </div>
        <div className="fixed-action-btn rotateIntro">
          <img src={businessCard} style={{ maxWidth: "65px" }} />
          <p>Contact me</p>
        </div>
      </div>
    );
  }
}
export default Footer;
