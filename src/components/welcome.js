import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import keith1 from "../images/keith2.jpg";
import keith2 from "../images/mcgillKeith.jpg";
class Welcome extends Component {
  renderHeaderTitle() {
    return (
      <div class="row welcomeCard">
        <div class="col s12 m12">
          <div class="card blue-grey darken-1 white-text">
            <div class="card-content">
              <div class="card-title">Welcome</div>
              <div>
                <p>
                  Welcome to my website. My name is Keith Dang. I graduated from
                  McGill Univeristy for my Bachelor's of Electrical Engineering
                  and I am a former Software Developer at FixMeStick
                  Technologies.
                  <br />
                  Currently eager to explore the world of web development. I
                  also have a passion for dance. This site will give you all the
                  details about me. Enjoy!
                  <br />
                  This site was developed through React, Bootstrap, and
                  Materializecss
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  renderPhotos() {
    return (
      <div class="row opaqElement">
        <div class="col s12 m12">
          <div class="card blue-grey darken-1 white-text">
            <div class="row" style={{ paddingBottom: "16px" }}>
              <div class="card-content">
                <Col xs={12} md={6}>
                  <img width="100%" src={keith1} />
                </Col>
                <Col xs={12} md={6}>
                  <img width="100%" src={keith2} />
                </Col>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  renderWelcomeInfo() {
    return (
      <div class="row reduHeader ">
        <div class="col s12 m12">
          <div class="card blue-grey darken-1 white-text">
            <div class="row">
              <div class="card-content">
                <p>
                  Welcome to my website. My name is Keith Dang. I finished my
                  undergraduate degree at McGill Univeristy for me Bachelor's of
                  Electrical Engineering.
                </p>
                <p>
                  I am looking for a Full-Stack Dev Role. Software Developer at
                  FixMeStick. I also have a passion for dance. This site will
                  give you all the details about me. Enjoy!
                </p>
                <p>
                  This site was developed through React, Bootstrap,
                  Materializecss
                </p>
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
            <Row className="show-grid popTitle">{this.renderHeaderTitle()}</Row>
            <Row className="show-grid popContent">{this.renderPhotos()}</Row>
          </Grid>
        </div>
      </div>
    );
  }
}
export default Welcome;
