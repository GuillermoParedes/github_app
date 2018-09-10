import React, { Component } from "react";
import { apiGithub } from "./../config";
import axios from "axios";
import { ListRepo } from "./../components";
class Repositories extends Component {
  componentWillMount() {
    axios
      .get(
        apiGithub.url + "/users/" + this.props.match.params.login + "/repos",
        {
          headers: {
            Authorization:
              localStorage.getItem("token_type") +
              " " +
              localStorage.getItem("access_token")
          }
        }
      )
      .then(response => {
        this.refs.ListRepo.setState({
          list: response.data || []
        });
      })
      .catch(err => {
        console.log("err", err);
      });
  }
  render() {
    return (
      <div>
        {" "}
        <ListRepo
          ref="ListRepo"
          title={`Repositories of User: ` + this.props.match.params.login}
          getRepos={this.getRepos}
        />
      </div>
    );
  }
}

export default Repositories;
