import React from "react";
import { Card, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
export default function QuestionCard({ question, author }) {
  const navi = useNavigate();
  return (
    <Container
      className="m-1  p-5  "
      style={{ display: "flex", justifyContent: "center" }}
    >
      <Card
        className="shadow  "
        style={{ width: "50%", display: "flex", justifyContent: "center" }}
      >
        <Card.Header>
          <span> {author.name} askes..</span>
        </Card.Header>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Card.Img
            style={{ width: "30%" }}
            variant="center"
            width={100}
            src={author.avatarURL}
          />
        </div>

        <Card.Body>
          <Card.Title>Would you rather ?</Card.Title>

          <div className="container w-100 m-3 text-start">
            <div>{question.optionOne.text}</div>
            <div>
              <h6>or</h6>
            </div>
            <div>...</div>
          </div>

          <Button
            variant="primary"
            onClick={() => navi(`/questions/${question.id}`)}
          >
            view details
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}
