import React from "react";
import QuestionCard from "./QuestionCard";

export default function ListOfQuestions(props) {
  return (
    <>
      {props.questions
        .map((question) => (
          <QuestionCard
            question={question}
            author={props.users[question.author]}
            key={question.id}
          />
        ))
        .reverse()}
    </>
  );
}
