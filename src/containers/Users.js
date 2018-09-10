import React, { Component } from "react";

import { apiGithub } from "./../config";
import axios from "axios";
import { ListItem } from "./../components";
class Users extends Component {
  componentWillMount() {
    axios
      .get(apiGithub.url + "/users?since=135", {
        headers: {
          Authorization:
            localStorage.getItem("token_type") +
            " " +
            localStorage.getItem("access_token")
        }
      })
      .then(response => {
        this.refs.ListItem.setState({
          list: response.data || []
        });
      })
      .catch(err => {
        console.log("err", err);
      });
  }
  getRepos = login => {
    this.props.location.push("/_repos/" + login);
  };
  render() {
    return (
      <div>
        <ListItem
          ref="ListItem"
          title="List of Users"
          getRepos={this.getRepos}
        />
      </div>
    );
  }
}

export default Users;
