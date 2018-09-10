import React, { Component } from "react";
import {
  Badge,
  Button,
  Card,
  CardSubtitle,
  CardBody,
  CardLink,
  CardTitle
} from "reactstrap";
class Repo extends Component {
  render() {
    let {
      description,
      name,
      open_issues,
      open_issues_count,
      forks,
      html_url
    } = this.props;
    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle className="text-center">
              <strong>Name:</strong>
              {name}
            </CardTitle>
            {description ? (
              <CardSubtitle>
                <strong>Description:</strong>
                {description}
              </CardSubtitle>
            ) : (
              ""
            )}
            <br />
            <CardLink href={html_url}>
              <Button color="primary" outline block>
                Go to repositorie
              </Button>
            </CardLink>
            <br />
            <CardLink>
              <Badge color="info"> Issues : {open_issues}</Badge>
              <Badge color="warning"> Open Issues : {open_issues_count}</Badge>
              <Badge color="success"> Forks : {forks} </Badge>
            </CardLink>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Repo;
