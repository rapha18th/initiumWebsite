import React, { Component } from "react";
import {Smartphone, Mail } from 'react-feather'

import './contact.css'


const phone3 = '+263773370813';
const phone4 = '+263777414925';
const email = 'info@initium.co.zw';


export default class Contact extends Component {
  render() {
    return (
      <div className="contact section" id="Contact">
        <div className="container">
          <div className="section-head">
            <h2 className="text-center">Get in touch</h2>
            <div className="Contact--Details">
  
              
               {phone3 && (
                <a className="Contact--Details--Item" href={`tel:${phone3}`}>
                  <Smartphone /> {phone3}
                </a>
              )}
               {phone4 && (
                <a className="Contact--Details--Item" href={`tel:${phone4}`}>
                  <Smartphone /> {phone4}
                </a>
              )}
              {email && (
                <a className="Contact--Details--Item" href={`mailto:${email}`}>
                  <Mail /> {email}
                </a>
              )}
            </div>
          </div>
          <form
            action={process.env.formspreeID}
            name="contact"
            method="POST"
            data-netlify="true"
          >
            <div>
              <label>
                Your Name: <input type="text" name="name" required />
              </label>
            </div>
            <div>
              <label>
                Your Email: <input type="email" name="email" required />
              </label>
            </div>
            <div>
              <label>
                Message: <textarea name="message" required></textarea>
              </label>
            </div>
            <div>
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
