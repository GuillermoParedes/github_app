import React, { Component } from "react";
import { Button, Form } from "reactstrap";
import axios from "axios";

class Login extends Component {
  SignIn = event => {
    event.preventDefault();
    axios
      .get(
        "https://github.com/login/oauth/authorize?client_id=9cdbbe340753e27b40d7"
      )
      .then(response => {
        console.log("response login", response);
      })
      .catch(err => {
        console.log("err", err);
      });
  };
  submitForm(e) {
    e.preventDefault();
    this.props.agregarTarea(this.state);
  }
  onSuccess = event => {
    console.log("onSuccess", event);
  };
  onSonFailureuccess = event => {
    console.log("onFailure", event);
  };
  render() {
    return (
      <Form>
        <Button onClick={this.SignIn}>LOGIN</Button>
        <a
          className="btn btn-primary"
          href="https://github.com/login/oauth/authorize?client_id=9cdbbe340753e27b40d7"
        >
          {" "}
          GITHUB LOGIN{" "}
        </a>
      </Form>
    );
  }
}

export default Login;
