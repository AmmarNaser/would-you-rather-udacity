import React from "react";
import { Container } from "react-bootstrap";

export default function E404() {
  return (
    <div>
      <Container className="mb-3 flex justify-content-center">
        <img src="/assets/error.png" alt="error" />
      </Container>
    </div>
  );
}
