import React from "react";
import { Button, Container, Nav } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { ActionsOfUsers } from "../Redux/userSlices";
import styles from "./NavBar.module.css";

export default function NavBar() {
  //select the users from state
  const user = useSelector((state) => state.users);
  // bring the logedUser
  const logedUser = user.users[user.logedUser];
  //use dispatch hook
  const useAppDispatch = () => useDispatch();

  const dispatch = useAppDispatch();

  function handleLogout() {
    // localStorage.removeItem("logedUser");
    dispatch(ActionsOfUsers.logging(null));
  }
  return (
    <Container className={styles.container}>
      <Nav className={styles.Navs} fill variant="tabs">
        {/* use navlink  */}
        <Nav.Item>
          <NavLink className={styles.link} to="/home">
            Home
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink className={styles.link} to="/add">
            New Poll
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink className={styles.link} to="/leaderboard">
            Leader Board
          </NavLink>
        </Nav.Item>

        <Nav.Item className={styles.authlog}>
          {user.logedUser && (
            <>
              <div style={{ width: "80px", display: "flex" }}>
                <img
                  src={logedUser?.avatarURL}
                  alt=""
                  style={{ width: "60%" }}
                />
                <span className="MAIN">{logedUser?.name}</span>
              </div>
              <Button className={styles.btn} onClick={handleLogout}>
                Logout
              </Button>
            </>
          )}
        </Nav.Item>
      </Nav>
    </Container>
  );
}
