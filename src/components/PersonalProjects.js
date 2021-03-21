import React, { Component } from "react";

export default class PersonalProjects extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="projects" className="wrapper style3 special">
          <div className="inner">
            <header className="major">
              <h2>Some Things I've Built</h2>
            </header>
            <ul className="features">
              <li className="icon solid fa-university">
                <h3>ASU SSBE Website</h3>
                <p>
                  Worked with Prof. Barzin Mobasher to extensively develop his
                  faculty website from the ground up.
                </p>
                <a
                  href="https://cement.engineering.asu.edu/"
                  className="button fit primary"
                >
                  View Project
                </a>
              </li>
              <li className="icon solid fa-map-marked-alt">
                <h3>AerialSphere Map</h3>
                <p>
                  An expansive coverage map showcasing AerialSphere tech with
                  mapbox integration.
                </p>
                <a
                  href="https://www.aerialsphere.com/coverage/"
                  className="button fit primary"
                >
                  View Project
                </a>
              </li>
              <li className="icon solid fa-code">
                <h3>Netflix Praw Python</h3>
                <p>
                  A simple script to praw (collect) data from multiple
                  subreddits on Reddit and store it in your local database.
                </p>
                <a
                  href=" https://github.com/CBRAG11/netflix-recommendation-lda"
                  className="button fit primary"
                >
                  View Project
                </a>
              </li>
              <li className="icon fa-plus-square">
                <h3>MedCheck</h3>
                <p>
                  Developed a Drug Interaction Checker in Django using Django
                  Rest Framework.
                </p>
                <a
                  href="https://github.com/CBRAG11/medcheck-v2"
                  className="button fit primary"
                >
                  View Project
                </a>
              </li>
              {/* <li className="icon solid fa-laptop">
                <h3>Laravel Lumen Crud</h3>
                <p>
                  A basic CRUD (Create Read Update Delete) application utilizing
                  laravel's lumen API framework.
                </p>
                <a
                  href="https://github.com/CBRAG11/Laravel-Lumen-CRUD"
                  className="button fit primary"
                >
                  View Project
                </a>
              </li> */}
            </ul>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
