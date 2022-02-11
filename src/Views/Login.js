import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { ActionsOfUsers } from "../Redux/userSlices";
import "../App.css";

export default function Login() {
  const [selectOne, setSelect] = useState("");
  const Path = useLocation().pathname;
  const navi = useNavigate();
  const dispatch = useDispatch();
  const members = useSelector((state) => state.users.users);
  function handleSelect(e) {
    setSelect(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem("logedUser", selectOne);
    dispatch(ActionsOfUsers.logging(selectOne));
    navi({ Path });
  }
  return (
    <Container className=" w-25 mt-5">
      <div
        className=" w-100 "
        style={{
          fontSize: "100px",
          color: "rgb(79, 30, 124)",
          paddingLeft: "70px",
        }}
      >
        <i className="fas fa-sign-in-alt"></i>
      </div>

      <Form className="m-5 w-100 border-bottom p-3 " onSubmit={handleSubmit}>
        <Form.Select
          className=" shadow"
          aria-label="Default select example"
          onChange={handleSelect}
          value={selectOne}
        >
          <option>please select user..</option>
          {Object.values(members).map((user) => (
            <option value={user.id} key={user.id}>
              {user.name}
            </option>
          ))}
        </Form.Select>
        <Button variant="primary" type="submit" className="mt-5  shadow ">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
