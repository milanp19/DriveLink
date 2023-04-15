import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function NavDemo() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      style={{
        width: "100%",
        background: "transparent",
        position: "absolute",
        zIndex: "1",
        fontSize: "20px",
        fontStyle: "extra-bold",
        top: "0",
        color: "orange",
      }}
    >
      <Container>
        <Navbar.Brand href="#home">Ride Share</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
          <Nav>
            <NavDropdown title="Login" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                <a
                  href="index.html"
                  style={{ textDecoration: "None", color: "black" }}
                >
                  Passenger
                </a>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">
                <a
                  style={{ textDecoration: "None", color: "black" }}
                  href="index.html"
                >
                  Driver
                </a>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link eventKey={2} href="#memes">
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavDemo;
