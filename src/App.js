import { Navigate, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Fragment, useEffect } from "react";
import { _getQuestions, _getUsers } from "./_DATA";
import { ActionsOfQuestions } from "./Redux/questSlices";
import { ActionsOfUsers } from "./Redux/userSlices";
import Login from "./Views/Login";
import NavBar from "./Components/NavBar";
import Home from "./Views/Home";
import CreatNew from "./Views/CreatNew";
import QuestionPage from "./Views/QuestionDetail";
import LeaderBoard from "./Views/LeaderBoard";
import E404 from "./Views/E404";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  // Use throughout your app instead of plain `useDispatch` and `useSelector`

  const members = useSelector((state) => state.users);
  const useAppDispatch = () => useDispatch();
  const disptch = useAppDispatch();

  useEffect(
    function () {
      _getQuestions().then(function (data) {
        disptch(ActionsOfQuestions.putQuestions(data));
      });
      _getUsers().then((data) => disptch(ActionsOfUsers.setmembers(data)));
    },
    [disptch]
  );

  return (
    <div className="Application">
      <NavBar />
      <Routes>
        {!members.logedUser && <Route path="*" element={<Login />} />}
        {members.logedUser && (
          <Route path="/" element={<Navigate to="/home" />} />
        )}
        {members.logedUser && (
          <Fragment>
            <Route path="/home" element={<Home />} />
            <Route path="/add" element={<CreatNew />} />
            <Route path="/leaderboard" element={<LeaderBoard />} />
            <Route path="/questions/:questId" element={<QuestionPage />} />
            <Route path="*" element={<E404 />} />
          </Fragment>
        )}
      </Routes>
    </div>
  );
}
