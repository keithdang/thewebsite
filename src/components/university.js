import _ from "lodash";
import React, { Component } from "react";
import McGill from "../images/McGill_logo.png";
import { Table } from "react-bootstrap";
import Mssd from "../images/mssd.jpg";
import EusJc from "../images/eusjc.png";
import Ewb from "../images/ewb.jpeg";
class University extends Component {
  renderClassList() {
    var classList = [
      { code: "MATH 133", name: "Linear Algebra" },
      {
        code: "MATH 263",
        name: "Ordinary Differential Equations for Engineers"
      },
      { code: "MATH 264", name: "Advance Calculus for Engineers" },
      { code: "MATH 270", name: "Applied Linear Algebra" },
      { code: "COMP 202", name: "Foundations of Programming" },
      { code: "ECSE 200", name: "Electric Circuits" },
      { code: "ECSE 211", name: "Design Principles and Methods" },
      { code: "ECSE 222", name: "Computer Engineering" },
      { code: "ECSE 304", name: "Signals and Systems" },
      { code: "ECSE 323", name: "Digital System Design" },
      { code: "ECSE 334", name: "MicroElectronics" },
      { code: "ECSE 351", name: "Electromagnetic Fields" },
      { code: "ECSE 352", name: "Electromagnetic Waves" },
      { code: "ECSE 361", name: "Power Engineering" },
      { code: "ECSE 421", name: "Embedded Systems" },
      { code: "ECSE 434", name: "Microelectronics Laboratory" },
      { code: "ECSE 457", name: "ECSE Design Project" },
      { code: "ECSE 462", name: "Electromechanical Energy Conversion" },
      { code: "ECSE 464", name: "Power System Analysis" },
      { code: "ECSE 486", name: "Power Laboratory" }
    ];
    return _.map(classList, theList => {
      return (
        <tr>
          <td className="courseCode">{theList.code}</td>
          <td>{theList.name}</td>
        </tr>
      );
    });
  }
  renderDegreeInfo() {
    return (
      <div className="card blue-grey darken-1 opaqElement">
        <div className="card-content white-text">
          <span className="card-title">
            Bachelor's of Electrical Engineering
          </span>
          <p>
            Montreal, QC
            <br />
            2012-2017
            <br />
            GPA:3.24/4
          </p>
        </div>
      </div>
    );
  }
  renderCourses() {
    return (
      <div className="card blue-grey darken-1 opaqElement">
        <div className="card-content white-text reducedBotPad">
          <span className="card-title">Courses</span>
          <Table>
            <tbody>{this.renderClassList()}</tbody>
          </Table>
        </div>
      </div>
    );
  }
  renderMssd() {
    return (
      <div class="card blue-grey darken-1 white-text curCard opaqElement">
        <div class="row">
          <img src={Mssd} />
        </div>
        <div class="card-content">
          <span class="card-title">President</span>
          <p>
            McGill Student Street Dancers
            <br />
            <i>
              2016-2017
              <br />
              Montreal, Quebec
            </i>
          </p>
        </div>
        <div className="card-content curricularContent">
          <ul className="cardList">
            <li>
              Through new marketing tactics, I increased revenue made from dance
              classes by more than 100% (up to 50 students per class)
            </li>
            <li>
              Organized events such as a dance competition with over 80
              participants and +200 spectators, teach weekly workshops,
              collaborate and network with professional dancers in Canada
            </li>
            <li>
              Active member from 2012-2015 and then became Vice president of
              Communications and Events
            </li>
          </ul>
        </div>
      </div>
    );
  }
  renderEusJs() {
    return (
      <div class="card blue-grey darken-1 white-text curCard opaqElement">
        <div className="row">
          <img src={EusJc} />
        </div>
        <div class="card-content eusJcInfo">
          <span class="card-title">Vice President of Administration</span>
          <p>
            Engineer Undergraduate Society Junior Council
            <br />
            <i>
              2013-2014
              <br />
              Montreal, Quebec
            </i>
          </p>
        </div>
        <div className="card-content curricularContent">
          <ul className="cardList">
            <li>
              Representing junior engineering students in academic and social
              events
            </li>
          </ul>
        </div>
      </div>
    );
  }
  renderEwb() {
    return (
      <div class="card blue-grey darken-1 white-text curCard opaqElement">
        <div class="row">
          <img src={Ewb} />
        </div>

        <div class="card-content">
          <span class="card-title">Member</span>
          <p>
            Engineer Without Borders
            <br />
            <i>
              2013-2014
              <br />
              Montreal, Quebec
            </i>
          </p>
        </div>

        <div className="card-content curricularContent">
          <ul className="cardList">
            <li>
              Organized, volunteered, and participated in multiple fundraising
              events such as barbeques, RunToEnd Poverty and more
            </li>
          </ul>
        </div>
      </div>
    );
  }
  renderExtracurriculars() {
    return (
      <div class="row extracurTitle opaqElement">
        <div class="col s12 m12">
          <div class="card blue-grey darken-1 white-text">
            <div class="row">
              <div class="card-content">
                <span class="card-title">ExtraCurriculars</span>
              </div>
            </div>
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
              <img src={McGill} style={{ width: "35%" }} />
            </div>
          </div>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div className="container" style={{ textAlign: "center" }}>
        {this.renderHeaderTitle()}
        <div className="popContent uniGrid">
          <div>
            {this.renderDegreeInfo()}
            {this.renderCourses()}
          </div>
          <div>
            {this.renderExtracurriculars()}
            {this.renderMssd()}
            {this.renderEusJs()}
            {this.renderEwb()}
          </div>
        </div>
      </div>
    );
  }
}
export default University;
