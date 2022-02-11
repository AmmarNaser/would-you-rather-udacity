import React from "react";
import { useSelector } from "react-redux";
import ListOfQuestions from "../Components/ListOfQuestions";
import { Container, Row, Tab, Tabs } from "react-bootstrap";

export default function Home() {
  const questions = useSelector((state) => state.questions);
  const members = useSelector((state) => state.users);
  const logedUser = members.users[members.logedUser];
  const answerCheck = (question) =>
    Object.keys(logedUser?.answers).includes(question.id);

  const answerd = Object.values(questions).filter((question) =>
    answerCheck(question)
  );
  const unAnswerd = Object.values(questions).filter(
    (question) => !answerCheck(question)
  );
  return (
    <Container className=" flex justify-content-lg-center mt-5">
      <Row>
        <Tabs
          defaultActiveKey="home"
          id="uncontrolled-tab-example"
          className="mb-3 flex justify-content-md-center"
        >
          <Tab
            eventKey="home"
            title="un answerd"
            variant="contained"
            color="error"
          >
            {questions && (
              <div>
                <ListOfQuestions questions={unAnswerd} users={members.users} />
              </div>
            )}
          </Tab>
          <Tab
            eventKey="profile"
            title="answerd"
            variant="contained"
            color="success"
          >
            {questions && (
              <div>
                <ListOfQuestions questions={answerd} users={members.users} />
              </div>
            )}
          </Tab>
        </Tabs>
      </Row>
    </Container>
  );
}
