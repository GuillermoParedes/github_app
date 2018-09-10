import React, { Component } from "react";

import {
  Badge,
  Button,
  Card,
  CardImg,
  CardBody,
  CardLink,
  CardTitle
} from "reactstrap";
class Item extends Component {
  getRepos = () => {
    this.props.getRepos(this.props.login);
  };
  render() {
    let { login, avatar_url, html_url } = this.props;
    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle className="text-center">
              <strong>User Name:</strong>
              <Badge color="primary"> {login}</Badge>
            </CardTitle>
          </CardBody>
          <CardImg top width="100%" src={avatar_url} />

          <CardBody>
            <CardLink href={html_url}>
              <Button color="primary" outline block>
                Github
              </Button>
            </CardLink>
            <CardLink href={`/github_app/_repos/${login}`}>
              <Button color="success" outline block>
                Repositories
              </Button>
            </CardLink>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Item;
