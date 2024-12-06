import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <>
      <div className="container mt-4 p-4" style={{height:"90vh"}}>
        <Row className="d-flex">
          <Col sm={6} lg={8}>
            <h2>TaskMaster</h2>
            <p style={{ textAlign: "justify" }}>
              Welcome to TaskMaster,a simple and intuitive application designed to
              help you stay organized and manage your tasks effectively. Whether
              you're working on a personal project, managing work tasks, or
              simply organizing your daily to-dos, this app provides all the
              essential features you need to add, update, and delete tasks with
              ease.
            </p>
            <Link className="btn btn-success w-100" to={"/dash"}>
              Let's GO
            </Link>
          </Col>
          <Col sm={6} lg={4}>
            <img
              src="/b1.png"
              alt=""
              className="img-fluid"
              style={{ maxWidth: "400px" }}
            />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Landing;
