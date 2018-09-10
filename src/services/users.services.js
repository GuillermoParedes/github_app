import axios from "axios";
import { apiGithub } from "./../config";

function getUsers() {
  return axios.get(apiGithub.url, {
    headers: {
      Authorization:
        localStorage.getItem("token_type") +
        " " +
        localStorage.getItem("access_token")
    }
  });
}

module.exports = {
  getUsers
};
