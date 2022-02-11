import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Answerd from "../Components/Answerd";
import UnAnswerd from "../Components/unAnswerd";
import E404 from "./E404";

export default function QuestionPage() {
  const questions = useSelector((state) => state.questions);

  const users = useSelector((state) => state.users);

  const logedUser = users.users[users.logedUser];

  const questId = useParams().questId;

  const thequestion = questions[questId];

  const AnsweredOne = Object.keys(logedUser.answers).includes(questId);
  if (!thequestion) {
    return <E404 />;
  }
  return (
    <div className=" border-bottom p-5  ">
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        {!AnsweredOne && (
          <UnAnswerd
            question={thequestion}
            logedUser={logedUser}
            author={users.users[thequestion.author]}
          />
        )}
        {AnsweredOne && (
          <Answerd
            question={thequestion}
            logedUser={logedUser}
            author={users.users[thequestion.author]}
          />
        )}
      </div>
    </div>
  );
}
