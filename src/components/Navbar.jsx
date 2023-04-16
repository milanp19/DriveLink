import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar
      className="nav"
      collapseOnSelect
      expand="lg"
      style={{
        width: "100%",
        background: "black",
        position: "relative",
        zIndex: "2",
        fontSize: "20px",
        fontStyle: "extra-bold",
        top: "0",
      }}
    >
      <Container>
        <Navbar.Brand href="#home">
          <h1
            className="logo"
            style={{
              color: "#5cb8ff",
            }}
          >
            drivelink
          </h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
          <Nav style={{ color: "#5cb8ff" }} id="nav-items">
            <NavDropdown title="Login" id="collasible-nav-dropdown">
              <NavDropdown.Item
                href="#action/3.1"
                style={{ display: "flex", flexWrap: "wrap" }}
              >
                <Nav.Link
                  href="login/index.html"
                  style={{
                    textDecoration: "None",
                    color: "#5cb8ff",
                  }}
                >
                  Passenger
                </Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                href="#action/3.2"
                style={{ display: "flex", flexWrap: "wrap", maxWidth: "150px" }}
              >
                <Nav.Link
                  style={{ textDecoration: "None", color: "#5cb8ff" }}
                  href="login/index.html"
                >
                  Driver
                </Nav.Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link eventKey={2} href="#memes" style={{ color: "#5cb8ff" }}>
              About
            </Nav.Link>
            <Nav.Link href="#features" style={{ color: "#5cb8ff" }}>
              Features
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
