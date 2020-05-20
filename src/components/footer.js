import React, { Component } from "react";

export default class footer extends Component {
  render() {
    return (
      <div className="site-footer" id="footer">
        <div className="container">
          <span>{this.props.siteName} &#169; {new Date().getFullYear()}{" "} </span>
        </div>
      </div>
    );
  }
}
