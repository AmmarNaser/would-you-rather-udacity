import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import styles from "./MemCard.module.css";

export default function MemCard({ user }) {
  return (
    <Container
      className="p-5"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <Card
        className="shadow  "
        style={{ width: "50%", display: "flex", justifyContent: "center" }}
      >
        <Card.Title className="border-bottom m-2 p-2">{user.name}</Card.Title>
        <Container>
          <Row>
            <Col>
              <Card.Img variant="top" src={user.avatarURL} />
            </Col>
            <Col
              style={{
                marginTop: "5%",
              }}
              xs={{ order: 12 }}
            >
              <Row width={20}>
                <h4>asked: {user.questions.length}</h4>
              </Row>
              <Row width={20}>
                <h4>answered: {Object.keys(user.answers).length}</h4>
              </Row>
            </Col>
            <Col xs={{ order: 1 }} className={styles.score}>
              <h4>
                score :{" "}
                {user.questions.length + Object.keys(user.answers).length}{" "}
              </h4>
            </Col>
          </Row>
        </Container>
      </Card>
    </Container>
  );
}
