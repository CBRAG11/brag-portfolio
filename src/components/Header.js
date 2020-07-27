import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        {/* Header */}
        <section id="banner">
          <div className="inner">
            <div className="img-container" >
              <img className="profile-img" src="%PUBLIC_URL%/../images/profile-1.png" alt="" />
            </div>
            <h2><span>Clinton Braganza</span></h2>
            <span>
              <ul className="icons">
                <li><a href="mailto:cbragan1@asu.edu" className="icon solid fa-envelope"><span className="label">Email</span></a></li>
                <li><a href="https://www.linkedin.com/in/clinton-braganza/" className="icon brands fa-linkedin"><span className="label">Linkedin</span></a></li>
                <li><a href="https://www.instagram.com/clinton_brag/" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
                <li><a href="https://github.com/cbrag11" className="icon brands fa-github"><span className="label">Github</span></a></li>
              </ul>
            </span>
            <p><span>Software Engineer | Petrolhead</span></p>
            <p><span>Arizona State University</span><span> MS ISM - Data Analytics</span></p>
            <ul className="actions special">
              <li><a href="%PUBLIC_URL%/../files/ClintonBraganza-Resume.pdf" className="button " download>Resume</a></li>
            </ul>
            <p><span>Built in React</span></p>
          </div>
        </section>
      </React.Fragment>
    );
  }
}