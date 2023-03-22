import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="none" expand="md border">
      <Container>
        <Navbar.Brand>
          {/* put logo here  */}
          <Link to="/">DL</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-2">
            <Link to="/signup" title="Sign Up">
              <i className="fa-solid fa-user-pen"></i>
            </Link>
            <Link to="/signin">
              <i className="fa-solid fa-right-to-bracket"></i>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
