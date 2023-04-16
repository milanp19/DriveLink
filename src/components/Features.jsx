import React from "react";

import Card from "react-bootstrap/Card";
const Features = () => {
  return (
    <>
      <div className="features">
        <h2>Features</h2>
        <div className="feature-items">
          <Card
            bg={"info"}
            style={{
              width: "18rem",
              textAlign: "center",
              background: "#5cb8ff",
              color: "black",
            }}
            className="mb-2"
          >
            <Card.Body>
              <Card.Title> Cost-Effective </Card.Title>
            </Card.Body>
          </Card>
          <Card
            bg={"info"}
            style={{
              width: "18rem",
              textAlign: "center",
              color: "black",
              background: "#5cb8ff",
            }}
            className="mb-2"
          >
            <Card.Body>
              <Card.Title> Environment Friendly </Card.Title>
            </Card.Body>
          </Card>
          <Card
            bg={"info"}
            style={{
              width: "18rem",
              textAlign: "center",
              color: "black",
              background: "#5cb8ff",
            }}
            className="mb-2"
          >
            <Card.Body>
              <Card.Title>Socially Beneficial </Card.Title>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Features;
