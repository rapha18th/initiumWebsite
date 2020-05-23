import React, { Component } from "react";
import { Smartphone } from 'react-feather';

const phone3 = '+263773370813';

export default class service extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="service section" id="Service">
        <div className="container">
          <div className="section-head">
            <h2>Services</h2>
          </div>
          <div className="row">
            {data.edges.map((item, index) => {
              return (
                <div key={index} className="col-md-4 mb-3">
                  <div className="service-main">
                    <h3>{item.node.title}</h3>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: item.node.description.childMarkdownRemark.html
                      }}
                     />
                       {phone3 && (
                <a className="Contact--Details--Item" href={`tel:${phone3}`}>
                  <Smartphone /> {phone3}
                </a>
              )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
