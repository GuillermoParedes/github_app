import React, { Component } from "react";
import queryString from "query-string";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

class Home extends Component {
  componentWillMount() {
    const values = queryString.parse(this.props.location.search);
    axios
      .post("http://localhost:3030/api/auth/github/token", {
        code: values.code
      })
      .then(response => {
        const valores = queryString.parse(response.data);
        localStorage.setItem("access_token", valores.access_token);
        localStorage.setItem("scope", valores.scope);
        localStorage.setItem("token_type", valores.token_type);
      })
      .catch(error => {});
  }
  redirectToUsers = event => {
    event.preventDefault();
    this.props.history.push("/github_app/_users");
  };
  redirectToRepos = event => {
    event.preventDefault();
    this.props.history.push("/github_app/_repos/GuillermoParedes");
  };

  render() {
    return (
      <Container>
        <Row>
          <Col xs="6">
            {" "}
            <Card>
              <CardBody>
                <CardTitle>Users</CardTitle>
                <CardSubtitle>List</CardSubtitle>
                <CardText>Users list, of github</CardText>
                <Button
                  size="lg"
                  outline
                  color="primary"
                  block
                  onClick={this.redirectToUsers}
                >
                  To go
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col xs="6">
            {" "}
            <Card>
              <CardBody>
                <CardTitle>Repositories</CardTitle>
                <CardSubtitle>List</CardSubtitle>
                <CardText>Repositories list, of github</CardText>
                <Button
                  size="lg"
                  outline
                  color="success"
                  block
                  onClick={this.redirectToRepos}
                >
                  To go
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
