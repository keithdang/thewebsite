import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Navbar,
  NavDropdown,
  MenuItem,
  Nav,
  NavItem
} from "react-bootstrap";
class NavigationBar extends Component {
  render() {
    return (
      <div className="kdawg">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/" className="navHome">
                Home
              </Link>
            </Navbar.Brand>
            <Navbar.Brand>
              <Link to="/dance" className="danceNav">
                Dance
              </Link>
            </Navbar.Brand>
            <Nav className="navDrop">
              <NavDropdown
                eventKey={3}
                title="Education"
                id="basic-nav-dropdown"
                className="navDrop2"
              >
                <MenuItem componentClass="span" className="navDrop3">
                  <Link to="/university" style={{ color: "black" }}>
                    University
                  </Link>
                </MenuItem>
                <MenuItem componentClass="span">
                  <Link to="/secondary" style={{ color: "black" }}>
                    Secondary
                  </Link>
                </MenuItem>
              </NavDropdown>
              <NavDropdown title="Experience" id="basic-nav-dropdown">
                <MenuItem componentClass="span">
                  <Link to="/employment" style={{ color: "black" }}>
                    Employment
                  </Link>
                </MenuItem>
                <MenuItem componentClass="span">
                  <Link to="/skills" style={{ color: "black" }}>
                    Skills
                  </Link>
                </MenuItem>
              </NavDropdown>
              <NavDropdown title="Projects" id="basic-nav-dropdown">
                <MenuItem componentClass="span">
                  <Link to="/personal" style={{ color: "black" }}>
                    Personal
                  </Link>
                </MenuItem>
                <MenuItem componentClass="span">
                  <Link to="/schoolProjects" style={{ color: "black" }}>
                    School
                  </Link>
                </MenuItem>
              </NavDropdown>
            </Nav>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}
export default NavigationBar;
