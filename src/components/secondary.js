import _ from "lodash";
import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import Weston from "../images/westonTransparent.png";
import IBLogo from "../images/ib-logo.png";
class Secondary extends Component {
  renderClassList() {
    var classList = [
      { name: "IB Math" },
      { name: "IB Physics" },
      { name: "IB Chemistry" },
      { name: "IB History" },
      { name: "IB English" },
      { name: "IB French" }
    ];
    return _.map(classList, theList => {
      return (
        <tr>
          <td>{theList.name}</td>
        </tr>
      );
    });
  }
  renderCurricularList() {
    var classList = [
      { name: "Weston Dance Club", title: "Founder & President" },
      { name: "Algonguin Park Excursion", title: "IB Team Leader" },
      { name: "Cross Country" },
      { name: "Charity Club", title: "Liason" },
      { name: "Track & Field" },
      { name: "Badminton" },
      { name: "Eco Team" },
      { name: "Chess Team" },
      { name: "Math Club" }
    ];
    return _.map(classList, theList => {
      return (
        <tr>
          <td>
            {theList.name}
            <i>{theList.title ? " , " + theList.title : ""}</i>
          </td>
        </tr>
      );
    });
  }
  renderDegreeInfo() {
    return (
      <div className="card blue-grey darken-1 opaqElement">
        <div className="card-content white-text">
          <span className="card-title">
            Weston Colleguate Institute
            <br />
            Degree: High School Diploma & International Baccalaureate Degree
          </span>
          <p>
            Toronto, ON
            <br />
            2008-2012
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
            <tbody className="tdCenter">{this.renderClassList()}</tbody>
          </Table>
        </div>
      </div>
    );
  }
  renderAwardslist() {
    var classList = [
      {
        name: "International Baccalaureate Leadership Scholarship",
        year: "2012"
      },
      {
        name: "Loran Award Semi Finalist",
        year: "2012"
      },
      {
        name: "Cross Country Most Valuable Player",
        year: "2012"
      }
    ];
    return _.map(classList, theList => {
      return (
        <tr>
          <td>{theList.name}</td>
          <td>{theList.year}</td>
        </tr>
      );
    });
  }
  renderAwards() {
    return (
      <div className="card blue-grey darken-1 opaqElement">
        <div className="card-content white-text reducedBotPad">
          <span className="card-title">Awards Achieved</span>
          <Table>
            <tbody>{this.renderAwardslist()}</tbody>
          </Table>
        </div>
      </div>
    );
  }

  renderExtracurriculars() {
    return (
      <div className="card blue-grey darken-1 opaqElement">
        <div className="card-content white-text reducedBotPad">
          <span className="card-title">Extra Curriculars</span>
          <Table>
            <tbody className="tdCenter">{this.renderCurricularList()}</tbody>
          </Table>
        </div>
      </div>
    );
  }
  renderSchoolImages() {
    return (
      <div class="row schoolHeader opaqElement">
        <div class="col s12 m12">
          <div class="card blue-grey darken-1 white-text">
            <div class="row">
              <div class="card-content">
                <img src={Weston} />
                <img src={IBLogo} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <div>
          <Grid>
            <Row className="show-grid reducedHeaderBot popTitle">
              {this.renderSchoolImages()}
            </Row>
            <Row className="show-grid popContent">
              <Col xs={12} md={6}>
                {this.renderDegreeInfo()}
                {this.renderExtracurriculars()}
              </Col>
              <Col xs={12} md={6}>
                {this.renderCourses()}
                {this.renderAwards()}
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}
export default Secondary;
