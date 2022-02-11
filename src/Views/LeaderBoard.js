import React from "react";
import { useSelector } from "react-redux";
import MemCard from "../Components/MemCard";

export default function LeaderBoard() {
  // get usesr from store
  const member = useSelector((state) => state.users.users);

  // convert users Objective to array and sort them
  const usersList = Object.values(member).sort(
    (one, two) =>
      two.questions.length +
      Object.keys(two.answers).length -
      (one.questions.length + Object.keys(one.answers).length)
  );
  // return the view as a props to MemberCard component
  return (
    <div className="m-1  p-5  " style={{ justifyContent: "center" }}>
      {usersList.map((user) => (
        <MemCard user={user} key={user.id} />
      ))}
    </div>
  );
}
