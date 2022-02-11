import React, { useRef } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveTheQuestion } from "../Redux/questSlices";

export default function CreatNew() {
  // using hooks
  const navi = useNavigate();
  const useAppDispatch = () => useDispatch();
  const dispatch = useAppDispatch();
  //get the users from store
  const users = useSelector((state) => state.users);
  //converting users array to object
  const author = Object.values(users.users).find((user) => {
    return user.id === users.logedUser;
  });
  const fristInput = useRef();
  const scoundInput = useRef();
  function handleSubmit(e) {
    e.preventDefault();
    const fristOption = fristInput.current.value;
    const scoundOption = scoundInput.current.value;
    console.log(fristOption, scoundOption);
    dispatch(
      saveTheQuestion({
        optionOne: fristOption,
        optionTwo: scoundOption,
        author: author,
      })
    );
    navi("/home");
  }
  return (
    <div className="mt-5 w-100 border-bottom p-5 ">
      <Container style={{ display: "flex", justifyContent: "center" }}>
        <Card className=" w-50 p-5 shadow">
          <Card.Title className="border-bottom m-2 p-2">
            Would you rather ?
          </Card.Title>

          <Container>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label></Form.Label>
                <Form.Control
                  className=""
                  type="text"
                  placeholder="Option 1"
                  ref={fristInput}
                />
                <Form.Text>
                  <h4 className="m-3">Or</h4>
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label></Form.Label>
                <Form.Control
                  className=""
                  type="text"
                  placeholder="Option 2"
                  ref={scoundInput}
                />
              </Form.Group>

              <Button variant="success" type="submit">
                Submit
              </Button>
            </Form>
          </Container>
        </Card>
      </Container>
    </div>
  );
}
