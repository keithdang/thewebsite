import _ from "lodash";
import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import myRio from "../images/myRio.jpeg";
import dpmRobot from "../images/dpmRobot.jpg";

class SchoolProjects extends Component {
  renderCard(cardInfo) {
    return (
      <div className="card blue-grey darken-1 opaqElement">
        <div className="card-content white-text">
          {cardInfo.video && this.renderVideo(cardInfo.video)}
          {cardInfo.photo && (
            <img
              src={cardInfo.photo}
              style={{
                width: "100%"
              }}
            />
          )}
          <div style={{ textAlign: "left" }}>
            <span className="card-title">{cardInfo.title}</span>
            <p>{cardInfo.course}</p>
            <p>{cardInfo.date}</p>
            <p>Group Project: {cardInfo.members} members</p>
            <br />
            <p>{cardInfo.desc}</p>
            <br />
            <p>
              Contributions:
              {cardInfo.contributions}
            </p>
          </div>
        </div>
      </div>
    );
  }
  renderHeaderTitle() {
    return (
      <div class="row reduHeader">
        <div class="card blue-grey darken-1 white-text opaqElement">
          <div class="row">
            <div class="card-content">
              <div class="card-title">School Projects</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  renderVideo(videoLink) {
    return (
      <div>
        <iframe className="schoolProjVideo" src={videoLink} />
      </div>
    );
  }
  renderElectromyography() {
    var cardInfo = {
      title: "Electromyography Music",
      course: "Design Project",
      date: "Winter and Fall Semester 2016 (8 months)",
      video: "https://www.youtube.com/embed/68mGnxzUVJA",
      members: 4,
      desc:
        "Developed a device that uses non-invasive electromyography to visualize electrical signals passing through human limbs. Designing an analog circuit to amplifier, filter, and rectify signal from sensors on limb to a phone to read.",
      contributions:
        " I worked on the circuit. Other members worked on the phone app and simulations"
    };
    return this.renderCard(cardInfo);
  }
  renderDpmRobot() {
    var cardInfo = {
      title: "Autonomous Search and Rescue Robot",
      course: "Design Principles and Methods",
      date: "Jan-Apr 2014",
      members: 6,
      desc:
        "Created a robot to navigate around a course to find, detect, capture and carry a block to a safety zone. Covered full cycle engineering process: design, specifications, optimization, implementation, troubleshooting and refinement.",
      contributions:
        "Timeline of the project consisted of two segments. The first half is in groups of 2 in which I programmed routines for autonomous navigation and path recognition using motion and light sensors. The second half is merging with other groups to form a group of 6 where I focused on the construction of the robot",
      photo: dpmRobot
    };
    return this.renderCard(cardInfo);
  }
  renderMyRio() {
    var cardInfo = {
      title: "myRIO Machine Learning",
      course: "Embedded Systems",
      date: "Apr 2016",
      members: 4,
      desc:
        "Used the myRIO development board and Labview to create a neural network in the myRIO, which can learn to recognize spatial orientations taught by the user. Implemented a feedforward network and backpropagation algorithm.",
      contributions: " Labview program",
      photo: myRio
    };
    return this.renderCard(cardInfo);
  }
  renderMicro() {
    var cardInfo = {
      title: "Amplitude Modulated Receiver",
      course: "Microelectronics Lab",
      date: "Jan-Apr 2017",
      members: 3,
      desc:
        "Create and connect baseband amplifier, demodulator, power amplifier, pre-amplifier to create an AM receiver",
      contributions:
        " One member and myself worked on the circuit while the other member did the simulations"
    };
    return this.renderCard(cardInfo);
  }
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <div>
          <Grid>
            <Row className="show-grid">{this.renderHeaderTitle()}</Row>
            <Row className="show-grid popContent">
              <Col xs={12} md={6}>
                {this.renderMicro()}
                {this.renderDpmRobot()}
              </Col>
              <Col xs={12} md={6}>
                {this.renderElectromyography()}
                {this.renderMyRio()}
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}
export default SchoolProjects;
