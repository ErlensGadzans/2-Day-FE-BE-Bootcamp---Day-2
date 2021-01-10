import React, { Component } from "react";
import { Row, Form, Button, Container, Col } from "react-bootstrap";

export default class StartExamPage extends Component {
  state = {
    exam: {
      candidateName: "",
      name: "",
    },
  };

  render() {
    return (
      <>
        <Container
          className="d-flex align-items-center justify-content-center flex-column "
          style={{ height: "50vh" }}
        >
          <Row>
            <h1>Start exam page!</h1>
          </Row>
          <Row>
            <Form>
              <Form.Group controlId="userName">
                <Form.Label>Please enter your name here</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.candidateName}
                  placeholder="Enter your name"
                />
              </Form.Group>

              <Form.Group controlId="assignmentTitle">
                <Form.Label>Assignment name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Assignment Name"
                  value={this.state.name}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Row>
        </Container>
      </>
    );
  }
}
