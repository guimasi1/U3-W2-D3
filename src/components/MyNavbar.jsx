import React, { Component } from "react";
import { Container, Navbar, Nav, Form, NavDropdown } from "react-bootstrap";
import imageProfile from "../assets/avatar.png";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";

class MyNavbar extends Component {
  render() {
    return (
      <Container className="bg-secondary ps-5 pe-4  ">
        <Navbar expand="lg" className="fs-2sm ">
          <Navbar.Brand id="logo-container">
            <Link to="/">
              <img
                className="w-100"
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                alt="logo"
              />
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle className="bg-darkgrey" />
          <Navbar.Collapse>
            <Nav className="me-auto mb-2 mb-lg-0">
              <Nav.Item className="cursor">
                <Nav.Link className="text-lightgrey">
                  <Link className="text-decoration-none text-lightgrey" to="/">
                    Home
                  </Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="text-lightgrey">TV Shows</Nav.Link>
              </Nav.Item>

              <Nav.Item className="cursor">
                <Nav.Link className="text-lightgrey">Movies</Nav.Link>
              </Nav.Item>
              <Nav.Item className="cursor">
                <Nav.Link className="text-lightgrey">Recently Added</Nav.Link>
              </Nav.Item>
              <Nav.Item className="cursor">
                <Nav.Link className="text-lightgrey">My List</Nav.Link>
              </Nav.Item>
            </Nav>
            <Form className="d-flex align-items-center justify-content-end text-light flex-grow-1 text-end gap-3">
              <div className="gap-3 d-flex align-items-center">
                <Link
                  to="/SearchMovie"
                  className="text-decoration-none text-white"
                >
                  <i className="cursor bi bi-search"></i>
                </Link>
                <p className="cursor d-inline-block mt-3 text-light">KIDS</p>
                <i className="cursor bi bi-bell-fill"></i>
              </div>
              <div id="image-profile-navbar">
                <Image src={imageProfile} />
              </div>
              <NavDropdown
                id="nav-dropdown-dark-example"
                title=""
                menuVariant="dark"
                drop={"start"}
              >
                <Link className="text-decoration-none" to="/">
                  <NavDropdown.Item href="#action/3.1" className="fs-2sm ">
                    Home
                  </NavDropdown.Item>
                </Link>
                <Link className="text-decoration-none" to="/MyProfile">
                  <NavDropdown.Item href="#action/3.2" className="fs-2sm ">
                    Profile
                  </NavDropdown.Item>
                </Link>
                <Link className="text-decoration-none" to="/MySettings">
                  <NavDropdown.Item href="#action/3.3" className="fs-2sm ">
                    Settings
                  </NavDropdown.Item>
                </Link>
                <Link className="text-decoration-none" to="/SearchMovie">
                  <NavDropdown.Item href="#action/3.4" className="fs-2sm ">
                    Search
                  </NavDropdown.Item>
                </Link>
              </NavDropdown>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
  }
}

export default MyNavbar;
