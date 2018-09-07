import _ from "lodash";
import React, { Component } from "react";
import {
  Carousel,
  CarouselCaption,
  CarouselItem,
  Grid,
  Row,
  Col,
  Table
} from "react-bootstrap";
import dance1 from "../images/dance1.jpg";
import dance2 from "../images/dance2.jpg";
import dance3 from "../images/dance3.jpg";
import dance4 from "../images/dance4.jpg";
import dance5 from "../images/dance5.jpg";
import dance6 from "../images/dance6.jpg";
import dance7 from "../images/dance7.jpg";
class Dance extends Component {
  formatPlacement(placement) {
    switch (placement) {
      case 8:
        return "Quarter Finalist";
        break;
      case 16:
        return "Top 16";
        break;
      case 2:
        return "Finalist";
        break;
      default:
        return "Top " + placement;
    }
  }
  formatDate(date) {
    switch (date) {
      case "Mon":
        return "Mtl, QC";
        break;
      case "Tor":
        return "Tor, ON";
        break;
      case "Van":
        return "Van, BC";
        break;
      default:
        return date;
    }
  }
  formatCompetitionFormat(isPopping, isTeam) {
    var compFormat = "";
    if (isTeam) {
      compFormat += "2v2";
    } else {
      compFormat += "1v1";
    }
    compFormat += " ";
    if (isPopping) {
      compFormat += "Popping";
    } else {
      compFormat += "All Styles";
    }
    return compFormat;
  }
  trContents(itemList) {
    return _.map(itemList, item => {
      return (
        <tr>
          <td style={{ fontSize: "18px", width: "35%" }}>{item.eventName}</td>

          <td className="optionalInfo">{item.date}</td>
          <td className="optionalInfo">{this.formatDate(item.location)}</td>
          <td className="optionalInfo">
            {this.formatCompetitionFormat(item.popping, item.teams)}
          </td>
          <td>{this.formatPlacement(item.placement)}</td>
          <td style={{ width: "45%" }}>{item.desc}</td>
        </tr>
      );
    });
  }
  renderCompetitionInfo() {
    var danceCompetitionList = [
      {
        placement: 8,
        eventName: "Vancouver Street Dance Festival",
        date: "Aug 2018",
        location: "Van",
        popping: true,
        teams: false,
        desc: "amongst 75+ dancers from Canada & US"
      },
      {
        placement: 10,
        eventName: "Da Reunion",
        date: "Feb 2018",
        location: "Mon",
        teams: false,
        popping: true,
        desc: "amongst 30+ dancers"
      },
      {
        placement: 16,
        eventName: "Creative Boost",
        date: "July 2017",
        location: "Mon",
        popping: false,
        teams: false,
        desc: "where dancers are challenged by dancing to contemporary music"
      },
      {
        placement: 8,
        eventName: "Just Feel It",
        date: "May 2017",
        location: "Tor",
        popping: true,
        teams: false
      },
      {
        placement: 8,
        eventName: "Beat Box Battle",
        date: "Nov 2016",
        location: "Mon",
        popping: false,
        teams: true,
        desc:
          "All Styles battle where dancers are challenged by dancing to music produced by the beat boxer"
      },
      {
        placement: 16,
        eventName: "Under Pressure",
        date: "July 2016",
        location: "Mon",
        popping: true,
        teams: false
      },
      {
        placement: 8,
        eventName: "Da Reunion",
        date: "April 2016",
        location: "Mon",
        popping: true,
        teams: false
      },
      {
        placement: 8,
        eventName: "Flip Da Coin",
        date: "Jan 2016",
        location: "Mon",
        popping: true,
        teams: false,
        desc:
          "7tosmoke format where the king of the hill concept is implemented and you want to obtain 7 points first (win 7 battles)"
      },
      {
        placement: 16,
        eventName: "Nuit Blanche",
        date: "Dec 2015",
        location: "Mon",
        popping: false,
        teams: false,
        desc: ""
      },
      {
        placement: 2,
        eventName: "Heir to the Throne",
        date: "April 2015",
        location: "Mon",
        popping: false,
        teams: true,
        desc: "where teams consts of a student and their mentor"
      },
      {
        placement: 16,
        eventName: "DKM Prop Jam",
        date: "Dec 2014",
        location: "Tor",
        popping: false,
        teams: false,
        desc:
          "where qualifers must compete with a randomly selected object (ball,cane,etc...)"
      }
    ];
    return (
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">Achievements</span>
          <p style={{ fontSize: "12px" }}>
            *All listed are freestyle battles! IE: Music is not known before
            hand so dancers must present their piece impromptu
            <br />
            Popping derives to a specific style while All-Styles is a term used
            for any style is accepted
          </p>
          <div>
            <Table>
              <thead>
                <tr>
                  <th>Event</th>
                  <th className="optionalInfo">Date</th>
                  <th className="optionalInfo">Loc</th>
                  <th className="optionalInfo">Format</th>
                  <th>Placement</th>
                  <th>Additional Description</th>
                </tr>
              </thead>
              <tbody>{this.trContents(danceCompetitionList)}</tbody>
            </Table>
          </div>
        </div>
      </div>
    );
  }
  renderCarousel() {
    return (
      <Carousel interval={null} className="dancePhotoCarousel">
        <Carousel.Item>
          <iframe
            className="danceVideo"
            src={"https://www.youtube.com/embed/8sNppJ4gQV8"}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img src={dance1} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={dance2} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={dance3} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={dance4} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={dance5} />
        </Carousel.Item>
        <Carousel.Item>
          <img
            // style={{ width: "70%", display: "-webkit-inline-box" }}
            src={dance6}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            // style={{ width: "60%", display: "-webkit-inline-box" }}
            src={dance7}
          />
        </Carousel.Item>
      </Carousel>
    );
  }
  renderHeaderTitle() {
    return (
      <div class="row reduHeader">
        <div class="card blue-grey darken-1 white-text">
          <div class="row">
            <div class="card-content">
              <div class="card-title">Dance</div>
              <p>
                When I'm not coding I dance. I have learned various street dance
                styles such as Hip-Hop, Breaking, Krump, House & Locking but my
                main is one called Popping.
              </p>
              <p>
                One component I strive for is battling. Below are various
                competitions I have qualified and competed within various cities
                around Canada.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <Grid>
          <Row className="show-grid opaqElement">
            {this.renderHeaderTitle()}
          </Row>
          <div className="popContent">
            <Row className="show-grid opaqElement">
              {this.renderCompetitionInfo()}
            </Row>
            <Row className="show-grid">
              <Col md={12} />
              <Col>{this.renderCarousel()}</Col>
            </Row>
          </div>
        </Grid>
      </div>
    );
  }
}
export default Dance;
