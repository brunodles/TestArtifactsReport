import React from "react";
import Report from "./Report";

class Loader extends React.Component {
  constructor() {
    super();
    this.state = { data: null };
  }

  componentDidMount() {
    if (this.props.url !== undefined && this.props.data === undefined) {
      fetch(this.props.url)
        .then(result => result.json())
        .then(items => this.setState({ data: items }));
    }
  }

  render() {
    if (this.props.data !== undefined) {
      return (<Report data={this.props.data}/>);
    }
    if (this.state.data == null) {
      return (<h1>Loading...</h1>);
    }
    return (<Report data={this.state.data}/>);
  }
}

export default Loader;
