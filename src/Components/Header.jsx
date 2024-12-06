import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
          <i className="fa-solid fa-list" size="lg" style={{color: "#0f0f10",}} />
            {" "}
            ToDo App
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
