import React from "react";
import { useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar() {
  const location = useLocation();

  return (
    <Navbar bg="dark" data-bs-theme="dark" className="mb-4">
      <Container>
        <Nav className="mx-auto gap-4">
          <Nav.Link href="/" active={location.pathname === "/"}>
            Home
          </Nav.Link>
          <Nav.Link
            href="/addtransaction"
            active={location.pathname === "/addtransaction"}
          >
            Add Transactions
          </Nav.Link>
          <Nav.Link
            href="/listtransaction"
            active={location.pathname === "/listtransaction"}
          >
            List Transactions
          </Nav.Link>
          <Nav.Link href="/report" active={location.pathname === "/report"}>
            Reports
          </Nav.Link>
          <Nav.Link href="/setting" active={location.pathname === "/setting"}>
            Settings
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
