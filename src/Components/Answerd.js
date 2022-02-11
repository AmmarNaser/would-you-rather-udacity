import React from "react";
import classes from "./Answerd.module.css";
import { Card, Container } from "react-bootstrap";

export default function Answerd({ question, author, logedUser }) {
  const checkingAnswers = logedUser.answers[question.id];
  const optionOneVotes = question.optionOne.votes?.length;
  const optionTwoVotes = question.optionTwo.votes?.length;
  const totalVotes = optionOneVotes + optionTwoVotes;
  const optionOnePerc = `${Math.round((optionOneVotes / totalVotes) * 100)}%`;
  const optionTwoPerc = `${Math.round((optionTwoVotes / totalVotes) * 100)}%`;

  const activeClassOne =
    checkingAnswers === "optionOne"
      ? `${classes.option} ${classes.active}`
      : classes.option;
  const activeClassTwo =
    checkingAnswers === "optionTwo"
      ? `${classes.option} ${classes.active}`
      : classes.option;

  return (
    <Container
      className="m-1  p-5  "
      style={{ display: "flex", justifyContent: "center" }}
    >
      <Card
        className="shadow  "
        style={{ width: "50%", display: "flex", justifyContent: "center" }}
      >
        <Card.Header className="col">{author.name} askes..</Card.Header>
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
          <div>
            <div className=" container p-2 m-2 ">
              <h5>Results:</h5>
              <div className={activeClassOne}>
                <p>{question.optionOne.text}</p>
                <div className={classes.outer}>
                  <p>{optionOnePerc}</p>
                  <div style={{ width: `${optionOnePerc}` }}></div>
                </div>
                <span>
                  {optionOneVotes} out of {totalVotes} votes
                </span>
              </div>
              <br />
              <div className={activeClassTwo}>
                <p>{question.optionTwo.text}</p>
                <div className={classes.outer}>
                  <p>{optionTwoPerc}</p>
                  <div style={{ width: `${optionTwoPerc}` }}></div>
                </div>
                <span>
                  {optionTwoVotes} out of {totalVotes} votes
                </span>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}
