import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer id="footer" className="footer">
          <ul className="icons">
            <li>
              <a
                href="mailto:cbragan1@asu.edu"
                className="icon solid fa-envelope"
              >
                <span className="label">Email</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/clinton-braganza/"
                className="icon brands fa-linkedin"
              >
                <span className="label">Linkedin</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/clinton_brag/"
                className="icon brands fa-instagram"
              >
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/cbrag11"
                className="icon brands fa-github"
              >
                <span className="label">Github</span>
              </a>
            </li>
          </ul>
          <ul className="copyright">
            <li>© Clinton Braganza</li>
          </ul>
        </footer>
      </React.Fragment>
    );
  }
}
