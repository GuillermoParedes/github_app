import React, { Component } from "react";
import { Alert, Col, Row } from "reactstrap";
import Repo from "./Repo";
const uuid = require("uuid/v4");
class ListRepo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };

    this.initialState = [];
  }

  componentWillReceiveProps(nextprops) {
    if (nextprops.list !== undefined) {
      this.setState({
        list: nextprops.list
      });
    }
  }
  renderContent = () => {
    var _list = this.state.list;
    return _list.map(r => {
      return (
        <Col xs="3" key={uuid()}>
          {" "}
          <Repo {...r} />
        </Col>
      );
    });
  };

  render() {
    return (
      <div>
        <Alert color="primary" className="text-center">
          {this.props.title}
        </Alert>
        <Row>{this.renderContent()}</Row>
      </div>
    );
  }
}

export default ListRepo;
