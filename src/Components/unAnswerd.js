import React, { useRef } from "react";
import { Card, Container, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { saveTheAnswer } from "../Redux/questSlices";

export default function UnAnswerd({ question, author, logedUser }) {
  const useAppDispatch = () => useDispatch();
  const disptch = useAppDispatch();
  const fristOption = useRef();
  const scoundOption = useRef();

  function handleClick(e) {
    e.preventDefault();
    if (fristOption.current.checked || scoundOption.current.checked) {
      return disptch(
        saveTheAnswer({
          questId: question.id,
          logedUser: logedUser.id,
          answer: fristOption.current.checked
            ? fristOption.current.value
            : scoundOption.current.value,
        })
      );
    }

    alert(" no user found");
  }

  return (
    <Container
      style={{ width: "50%", display: "flex", justifyContent: "center" }}
    >
      <Card className="shadow">
        <Card.Title className="border-bottom m-2 p-2">
          {author.name} Asks...
        </Card.Title>
        <Container
          style={{ width: "50%", display: "flex", justifyContent: "center" }}
        >
          <Card.Img variant="top" src={author.avatarURL} />
        </Container>
        <Container>
          <Form onSubmit={handleClick}>
            <Form.Group className="m-5">
              <Form.Label as="legend">Would You Rather?</Form.Label>

              <Form.Check
                type="radio"
                label={question.optionOne.text}
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
                value="optionOne"
                ref={fristOption}
              />
              <Form.Check
                type="radio"
                label={question.optionTwo.text}
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
                value="optionTwo"
                ref={scoundOption}
              />

              <Button className="m-3" type="submit">
                Submit
              </Button>
            </Form.Group>
          </Form>
        </Container>
      </Card>
    </Container>
  );
}
