import _ from "lodash";
import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import FixMeStick from "../images/fixmestick.jpg";
import Nokia from "../images/nokia.jpg";
import ReflexPhotonics from "../images/reflexPhotonics.jpg";
class Employment extends Component {
  renderHeaderTitle() {
    return (
      <div class="row reduHeader ">
        <div class="card blue-grey darken-1 white-text opaqElement">
          <div class="row">
            <div class="card-content">
              <div class="card-title">Job Experience</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  renderFixMeStick() {
    return (
      <div class="employment opaqElement card blue-grey darken-1 white-text">
        <div class="image">
          <img src={FixMeStick} />
        </div>
        <div class="card-content">
          <span class="card-title fixmestick">Software Developer</span>
          <p>
            FixMeStick
            <br />
            <i>
              June 2017-May 2018
              <br />
              Montreal, Quebec
            </i>
          </p>
        </div>
        <div className="card-content skillsCardContent">
          <ul className="cardList">
            <li>
              Agile Developement of the FixMeStick Windows and Linux Application
            </li>
            <li>
              C++ application to resolve bugs and improve performance dealing
              with Encryption, Booting of application, Device compatibility and
              more using Object Oriented Concepts
            </li>
            <li>
              Improved front end of FixMeStick application through Html, CSS,
              Javascript, and Bootstrap
            </li>
            <li>
              Automated retreival and dianogstics of logs and information of our
              user's use of the fixmestick application to better understand what
              specified issues our customers are dealing with in an efficient
              manner. Automated scripts in javascript, nodejs, bash
            </li>
          </ul>
        </div>
      </div>
    );
  }
  renderNokia() {
    return (
      <div className="employment opaqElement card blue-grey darken-1 white-text">
        <div className="image">
          <img src={Nokia} />
        </div>
        <div class="card-content">
          <span class="card-title">
            IPD Hardware Support Engineering Intern
          </span>
          <p>
            Nokia
            <br />
            <i>
              Jan 2015-Aug 2015
              <br />
              Kanata, Ontario
            </i>
          </p>
        </div>
        <div className="card-content skillsCardContent">
          <ul className="cardList">
            <li>
              Hardware verification including high speed signal integrity
              analysis on the latest prototype H/W designs using a variety of
              test gear such as oscilloscopes, network analyzers, and telecom
              interface test platforms
            </li>
            <li>
              Worked closely with production engineers to assist in improving
              prototype design and series production.
            </li>
            <li>
              Troubleshooting and rework on PCBs through soldering and
              constructing circuits to interact with the prototypes
            </li>
            <li>
              Thermal analysis, stress testing, frequency response, used Allegro
              Board Viewing program
            </li>
          </ul>
        </div>
      </div>
    );
  }
  renderReflexphotonics() {
    return (
      <div class="card blue-grey darken-1 white-text opaqElement employment">
        <div class="reflexImg">
          <img src={ReflexPhotonics} />
        </div>
        <div class="card-content">
          <span class="card-title">Hardware Engineering Intern</span>
          <p>
            Reflex Photonics
            <br />
            <i>
              June 2017-May 2018
              <br />
              Montreal, Quebec
            </i>
          </p>
        </div>
        <div className="card-content skillsCardContent">
          <ul className="cardList">
            <li>
              Optical transceivers testing and characterization, Eval board and
              test fixture design, test automation, and design transfer to
              manufacturing
            </li>
            <li>
              Actively involved in all aspects of the product development
              lifecycle of multimode short-range optical transceivers used for
              high speed data transmission
            </li>
            <li>
              Quality Assurance and Tests include BER, Sensitivity(using
              attenuators ), and TX and RX Eye diagrams all under various
              temperatures
            </li>
          </ul>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div className="container" style={{ textAlign: "center" }}>
        {this.renderHeaderTitle()}
        <div className="popContent employmentGrid">
          {this.renderFixMeStick()}
          {this.renderNokia()}
          {this.renderReflexphotonics()}
        </div>
      </div>
    );
  }
}
export default Employment;
