import React, { Component } from "react";
import { Alert, Col, Row } from "reactstrap";
import Item from "./Item";
const uuid = require("uuid/v4");
class ListItem extends Component {
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
    return _list.map(l => {
      return (
        <Col xs="3" key={uuid()}>
          {" "}
          <Item {...l} getRepos={this.props.getRepos} />
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

export default ListItem;
