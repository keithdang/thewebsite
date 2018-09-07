import _ from "lodash";
import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";

class Skills extends Component {
  trContents(itemList) {
    return _.map(itemList, item => {
      return (
        <tr>
          <td>{item.name}</td>
        </tr>
      );
    });
  }
  renderLanguagelist() {
    var oopList = [
      { name: "C++" },
      { name: "Java" },
      { name: "Python" },
      { name: "Scala" }
    ];
    return this.trContents(oopList);
  }
  renderFrontEndList() {
    var frontList = [
      { name: "React & Redux" },
      { name: "Javascript" },
      { name: "Html" },
      { name: "Css" },
      { name: "Bootstrap" },
      { name: "MaterializeCss" }
    ];
    return this.trContents(frontList);
  }
  renderCloud() {
    var cloudList = [{ name: "Heroku" }];
    return this.renderComponentCard("Cloud Platforms", cloudList);
  }
  renderOtherList() {
    var otherList = [
      { name: "C" },
      { name: "NodeJs & Express" },
      { name: "MatLab & Simulink" },
      { name: "JQuery" },
      { name: "Google App Script" }
    ];
    return this.trContents(otherList);
  }
  renderEditorList() {
    var editorList = [
      { name: "VSCode" },
      { name: "Visual Studios" },
      { name: "Qt Creator" },
      { name: "Android Studios" },
      { name: "Eclipse" },
      { name: "Dr. Java" },
      { name: "Arduino" },
      { name: "Sublime Text" }
    ];
    return this.trContents(editorList);
  }
  renderBackEnd() {
    return this.renderOneItemCards(
      "NoSQL",
      "MongoDB (with Mongoose.js & MLab)"
    );
  }
  renderLanguages() {
    return (
      <div className="card blue-grey darken-1 skillCard opaqElement">
        <div className="card-content white-text">
          <span className="card-title">Programming Languages</span>
          <div className="languageGrid">
            <div className="ool">
              <h6>Object Oriented</h6>
              <Table>
                <tbody>{this.renderLanguagelist()}</tbody>
              </Table>
            </div>
            <div className="front">
              <h6>Front-End</h6>
              <Table>
                <tbody>{this.renderFrontEndList()}</tbody>
              </Table>
            </div>
            <div className="other">
              <h6>Other</h6>
              <Table>
                <tbody>{this.renderOtherList()}</tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    );
  }
  renderOffice() {
    var microsoftList = [
      { name: "Word" },
      { name: "Excel" },
      { name: "PowerPoint" }
    ];
    var googleList = [
      { name: "Docs" },
      { name: "Spreadsheet" },
      { name: "Slides" }
    ];
    return (
      <div className="card blue-grey darken-1 skillCard">
        <div className="card-content white-text">
          <span className="card-title">Office Programs</span>
          <div class="row">
            <div class="col-xs-6">
              <h6>Microsoft</h6>
              <Table>
                <tbody>{this.trContents(microsoftList)}</tbody>
              </Table>
            </div>
            <div class="col-xs-6">
              <Table>
                <h6>Google</h6>
                <tbody>{this.trContents(googleList)}</tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    );
  }
  renderOS() {
    var osList = [{ name: "Windows" }, { name: "MacOs" }, { name: "Linux" }];
    return this.renderComponentCard("Operating Systems", osList);
  }
  renderAPIs() {
    var apiList = [
      { name: "Postman" },
      { name: "Google (Authenticator & Maps)" },
      { name: "Stripe" },
      { name: "OpenWeatherMap" },
      { name: "SendGrid" }
    ];
    return this.renderComponentCard("API & Related", apiList);
  }
  renderVersionControl() {
    var versionControlList = [
      { name: "Git" },
      { name: "Sourcetree" },
      { name: "TortoiseHg" },
      { name: "Mercurial" }
    ];
    return this.renderComponentCard(
      "Version Control Systems",
      versionControlList
    );
  }
  renderVM() {
    return this.renderOneItemCards("Virtual Machines", "Ubuntu");
  }
  renderOneItemCards(title, subComponent) {
    return (
      <div className="card blue-grey darken-1 skillCard opaqElement">
        <div className="card-content white-text">
          <span className="card-title">{title}</span>
          <div>
            <Table>
              <tbody>
                <tr>
                  <td>{subComponent}</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    );
  }
  renderComponentCard(title, componentList) {
    return (
      <div className="card blue-grey darken-1 skillCard opaqElement">
        <div className="card-content white-text">
          <span className="card-title">{title}</span>
          <div>
            <Table>
              <tbody>{this.trContents(componentList)}</tbody>
            </Table>
          </div>
        </div>
      </div>
    );
  }
  renderScripting() {
    return this.renderOneItemCards("Scripting", "Bash");
  }
  renderRubiks() {
    return this.renderOneItemCards("Rubik's Cube", "35s ;)");
  }
  renderIDEs() {
    var editorList = [
      { name: "VSCode" },
      { name: "Visual Studios" },
      { name: "Qt Creator" },
      { name: "Android Studios" },
      { name: "Eclipse" },
      { name: "Dr. Java" },
      { name: "Arduino" },
      { name: "Sublime Text" }
    ];
    return this.renderComponentCard("IDEs & Editors", editorList);
  }
  renderHeaderTitle() {
    return (
      <div class="row reduHeader" style={{ marginBottom: "12px" }}>
        <div class="card blue-grey darken-1 white-text opaqElement">
          <div class="row">
            <div class="card-content">
              <div class="card-title">Skills</div>
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
        <div className="popContent skillGrid">
          <div className="languages">{this.renderLanguages()}</div>
          <div className="os">{this.renderOS()}</div>
          <div className="scripting">{this.renderScripting()}</div>
          <div className="ide">{this.renderIDEs()}</div>
          <div className="api">{this.renderAPIs()}</div>
          <div className="cloud">{this.renderCloud()}</div>
          <div className="version">{this.renderVersionControl()}</div>
          <div className="vm">{this.renderVM()}</div>
          <div className="office">{this.renderOffice()}</div>
          <div className="backend">{this.renderBackEnd()}</div>
          <div className="rubiks">{this.renderRubiks()}</div>
        </div>
      </div>
    );
  }
}
export default Skills;
