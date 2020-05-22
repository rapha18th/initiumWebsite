import React, { Component } from "react";

export default class footer extends Component {
  render() {
    return (
      <div className="site-footer" id="footer">
        <div className="container">
          <span>{this.props.siteName} &#169; {new Date().getFullYear()}{" "} </span>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
<div class="icon-bar">
  <a href="#" class="whatsapp"><i class="fa fa-whatsapp"></i></a> 

<a href="https://api.whatsapp.com/send?phone=263773370813&text=" class="float">
<i class="fa fa-whatsapp my-float"></i>
</a>
      </div> 
        </div>
      </div>
    );
  }
}
