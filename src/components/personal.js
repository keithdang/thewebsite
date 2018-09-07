import _ from "lodash";
import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import AdditionGame from "../images/additionChallenge.png";
import Tournament from "../images/tournamentCombined.png";
import Pokemon from "../images/Pokemon.png";
import PokemonReact from "../images/pokemonReact.png";
import Weather from "../images/weather.png";
class PersonalProjects extends Component {
  trContents(itemList) {
    return _.map(itemList, item => {
      return <li>{item.name}</li>;
    });
  }
  linkContents(itemList) {
    return _.map(itemList, item => {
      return (
        <li>
          <a href={item.link}>{item.title}</a>
        </li>
      );
    });
  }
  renderLanguageList(itemList) {
    return (
      <div className="languageList">
        <ul className="cardList">{this.trContents(itemList)}</ul>
      </div>
    );
  }
  renderWhat(itemList) {
    return (
      <div className="card-content personalList">
        <ul className="cardList">
          {this.trContents(itemList.componentList)}
          {itemList.linkList && this.linkContents(itemList.linkList)}
        </ul>
      </div>
    );
  }
  renderAdditionGame() {
    var infoCard = {
      title: "Speed Addition Game",
      componentList: [
        {
          name:
            "Created an addition game clicking true or false dependending whether the equation was correct which includes the following features:"
        },
        { name: "Difficulty settings" },
        { name: "Used Chart.js to display game play history" },
        { name: "Sound effects with the option to opt out" },
        { name: "Bootstrap Carousel to navigate around the page" }
      ],
      languageList: [
        { name: "Html & Css" },
        { name: "Javascript, Bootstrap, ChartJs" }
      ],
      date: "March 25th-26th (2 days)",
      members: "Independent",
      photo: AdditionGame
    };
    return this.renderComponentCard(infoCard);
  }
  renderWeather() {
    var infoCard = {
      title: "Weather App",
      componentList: [
        {
          name:
            "Uses OpenWeatherMap API to access weekly and current weather forecasts of Canadian cities"
        },
        {
          name:
            "Users can input cities of their choice and have the ability to see what kind of data they want to see"
        },
        {
          name: "Sparklines for charts"
        }
      ],
      linkList: [
        {
          link: "https://github.com/keithdang/weather",
          title: "Go to Github!"
        }
      ],
      languageList: [
        { name: "React & Redux, Bootstrap, react-sparklines, Javascript" }
      ],
      date: "Sept 1st-2nd (2 days)",
      members: "Independent",
      photo: Weather
    };
    return this.renderComponentCard(infoCard);
  }
  renderScheduleBuilder() {
    var infoCard = {
      title: "Recursive Schedule Builder",
      componentList: [
        {
          name:
            "Users can select an array of courses to find all possibilities to determine which schedule fits best with them"
        },
        {
          name:
            "Used recursion to efficiently determine all possible combinations of courses"
        },
        {
          name: "Can unselect and reselect options"
        },
        {
          name:
            "Used react-week-calendar as template for UI. Adjusted and modified template for preferred and dynamic styling"
        }
      ],
      linkList: [
        {
          link: "https://github.com/keithdang/react-weekly-calendar",
          title: "Go to Github!"
        }
      ],
      languageList: [
        { name: "React, Bootstrap, react-week-calendar, Javascript" }
      ],
      date: "Aug 28th-30th (3 days)",
      members: "Independent",
      video: "https://www.youtube.com/embed/HnY1VmZAW0s"
    };
    return this.renderComponentCard(infoCard);
  }
  renderFullStackPokemon() {
    var infoCard = {
      title: "Full Stack Pokemon Game",
      componentList: [
        {
          name:
            "Updated previous pokemon game project into a web based application"
        },
        {
          name:
            "UI allows users to select a team of pokemon to battle and level up as they win games"
        },
        {
          name:
            "Google Auth so users can select and keep their pokemon within the players account"
        },
        {
          name:
            "Includes battle components such as healthpoints, moves, element types, damage points, dynamic texts"
        },
        {
          name:
            "Pokemon, moves, & users are stored in the back-end with MongoDB"
        },
        {
          name:
            "Versus computers that can autonomously determine the best attack to use based on general pokemon strategy"
        }
      ],
      linkList: [
        {
          link: "https://whispering-savannah-71164.herokuapp.com/",
          title: "Go to site!"
        },
        {
          link: "https://github.com/keithdang/pokemonGame",
          title: "Go to Github!"
        }
      ],
      languageList: [
        { name: "React & Redux, Bootstrap, Materialize-Css" },
        {
          name:
            "Node.js, Express API, Passport.js, Google+ API, MongoDB & Mongoose"
        }
      ],
      date: "Aug 24th-28th (5 days)",
      members: "Independent",
      photo: PokemonReact
    };
    return this.renderComponentCard(infoCard);
  }
  renderSignInBoilerPlate() {
    var infoCard = {
      title: "Full Stack Sign-In Boiler Plate",
      componentList: [
        {
          name:
            "Created a basic signin app as a boiler plate so that creating future projects requiring authentication and a database are pre-established"
        },
        {
          name: "Includes a points variable as a preset connection to MongoDB"
        }
      ],
      linkList: [
        {
          link: "https://dry-sierra-76262.herokuapp.com/",
          title: "Go to site!"
        },
        {
          link: "https://github.com/keithdang/mywebsite",
          title: "Go to Github!"
        }
      ],
      languageList: [
        { name: "React & Redux, Bootstrap, Materialize-Css" },
        {
          name:
            "Node.js, Express API, Passport.js, Google+ API, MongoDB & Mongoose"
        }
      ],
      date: "Aug 22nd-23rd (2 days)",
      members: "Independent",
      video: "https://www.youtube.com/embed/aNmTFMt0Gm0"
    };
    return this.renderComponentCard(infoCard);
  }
  renderTournament() {
    var infoCard = {
      title: "Tournament Bracket Android and Web App",
      componentList: [
        {
          name:
            "Wanted to create an app to help with dance competitions(and other forms) way of organizing an elimination tournament that is often used in the events I've participated in."
        },
        {
          name:
            "App can take in inputs and display in inputted order or randomized to which teams will then be displayed in a bracket style elimination torunament. UI allows user to keep elminating and proceed to continuous rounds until a winner is selected"
        }
      ],
      languageList: [
        { name: "Web App done using Html, CSS, Javascript and Bootstrap" },
        { name: "Android App done using Java with Android Studios IDE" }
      ],
      date: "Dec 2017",
      members: "Independent",
      photo: Tournament
    };
    return this.renderComponentCard(infoCard);
  }
  renderPokemon() {
    var infoCard = {
      title: "Pokemon Command Line Game",
      componentList: [
        {
          name:
            "Used Object Oriented Programming Concepts to develop the pokemon objects and have them interact with eachother"
        },
        {
          name: "Implemented Design Factory Pattern to generate Pokemon Objects"
        },
        {
          name:
            "Each Pokemon Object has their own Health Points,Level, Name, Elemnt Type, Arsenal of Moves with different types and damage points with respect to the move"
        },
        {
          name:
            "Versus computers that can autonomously determine the best attack to use based on general pokemon strategy"
        },
        {
          name:
            "Used text files to save data of your game and can be extracted and used when starting the program again so you can level up"
        }
      ],
      languageList: [{ name: "C++" }],
      date: "Aug 2017",
      members: "Independent",
      photo: Pokemon
    };
    return this.renderComponentCard(infoCard);
  }
  renderConvoBot() {
    var infoCard = {
      title: "Conversation Bot",
      componentList: [
        {
          name:
            "Create an person comprised of a random name, city of origin, age, gender, birthday, and major and would generate a random conversation of possible paths"
        }
      ],
      languageList: [{ name: "C++" }],
      date: "Aug 2017",
      members: "Independent"
    };
    var members = "Independent";
    return this.renderComponentCard(infoCard);
  }
  audioDescription() {
    return (
      <div>
        <div>
          Contributions: I worked on the circuitry and programming logic of the
          LEDs, audio and Arduino. My teammate, Daniel Wang will be using
          AutoCad to create the frames which will be implemented later.
          <br />
        </div>
        <div>
          The glasses can <br />
          1.Created 2 LED Matrices that can listen to audio as a music player
          visualization <br />
          2. Create various patterns and animations such as frame by frame of
          still images to scrolling vertical or horizontal
          <br />
        </div>
        <div>
          Done through soldering on a perfboard, using an IC counter, Arduino
          MIC for audio input, and Arduino Uno
        </div>
      </div>
    );
  }
  renderAudioLED() {
    var infoCard = {
      title: "Audio LED Glasses",
      componentList: [
        {
          name:
            "Create an person comprised of a random name, city of origin, age, gender, birthday, and major and would generate a random conversation of possible paths"
        }
      ],
      languageList: [{ name: "C++" }],
      date: "Aug 2017",
      members: "Independent",
      customDesc: this.audioDescription(),
      video: "https://www.youtube.com/embed/blUll83krOU"
    };
    return this.renderComponentCard(infoCard);
  }
  renderLightGuider() {
    var infoCard = {
      title: "Light Guider",
      componentList: [
        {
          name:
            "Developed a robot that orients itself towards light sources, determines the direction that gives the most light intensity, and autonomously monitors and updates for path to re-enact solar panels searching for sunlight with highest efficiency"
        }
      ],
      languageList: [{ name: "C++" }],
      date: "July 2016",
      members: "Independent"
    };
    return this.renderComponentCard(infoCard);
  }
  renderVideo(videoLink) {
    return (
      <div>
        <iframe className="projVideo" src={videoLink} />
      </div>
    );
  }
  renderComponentCard(infoCard) {
    return (
      <div className="card blue-grey darken-1 personalCard opaqElement">
        <div className="card-content white-text">
          <span className="card-title">{infoCard.title}</span>
          <div class="personalContent">
            {infoCard.photo && (
              <div>
                <img src={infoCard.photo} alt={infoCard.title} />
              </div>
            )}
            {infoCard.video && this.renderVideo(infoCard.video)}
            <div>
              <p>
                <i>{infoCard.date}</i>
                <p>{infoCard.members}</p>
              </p>
              {!infoCard.customDesc ? (
                <div>
                  <div>{this.renderWhat(infoCard)}</div>
                  <div style={{ display: "-webkit-box" }}>
                    <p>Languages</p>
                    {this.renderLanguageList(infoCard.languageList)}
                  </div>
                </div>
              ) : (
                infoCard.customDesc
              )}
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
              <div class="card-title">Personal Projects</div>
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
        <div className="personal popContent">
          {this.renderFullStackPokemon()}
          {this.renderScheduleBuilder()}
          {this.renderWeather()}
          {this.renderAdditionGame()}
          {this.renderTournament()}
          {this.renderAudioLED()}
          {this.renderPokemon()}
          <div>
            {this.renderConvoBot()}
            {this.renderLightGuider()}
          </div>
        </div>
      </div>
    );
  }
}
export default PersonalProjects;
