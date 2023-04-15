import React from "react";

import Card from "react-bootstrap/Card";
function BgColorExample() {
  return (
    <div className="features">
      <Card
        bg={"info"}
        style={{ width: "18rem", textAlign: "center" }}
        className="mb-2"
      >
        <Card.Body>
          <Card.Title> Cost-Effective </Card.Title>
        </Card.Body>
      </Card>
      <Card
        bg={"info"}
        style={{ width: "18rem", textAlign: "center" }}
        className="mb-2"
      >
        <Card.Body>
          <Card.Title> Environment Friendly </Card.Title>
        </Card.Body>
      </Card>
      <Card
        bg={"info"}
        style={{ width: "18rem", textAlign: "center" }}
        className="mb-2"
      >
        <Card.Body>
          <Card.Title>Socially Beneficial </Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
}

export default BgColorExample;
// export default Features;
