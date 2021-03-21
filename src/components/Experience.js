import React, { Component } from "react";

export default class Experience extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="experience" className="wrapper style4">
          <div className="inner">
            <header className="major">
              <h2>My Professional Experience?</h2>
            </header>
            <div className="experience-table">
              <h3>AerialSphere (2020-Present)</h3>
              <h4>Software Engineer</h4>
              <ul>
                <li>
                  Delivered full-stack Web Applications using agile
                  methodologies such as Scrum/Kanban.
                </li>
                <li>
                  Developed APIs and worked on the backend functionality
                  utilizing Django.
                </li>
                <li>
                  Extensively worked on creating the frontend for applications
                  in React.
                </li>
                <li>
                  Worked on mapbox integration and creating a coverage map from
                  the ground up.
                </li>
              </ul>
              <h3>Ambab Infotech (2018-2019)</h3>
              <h4>Software Engineer</h4>
              <ul>
                <li>
                  Overhauled a CRM system reducing lead processing time by upto
                  46%.
                </li>
                <li>
                  Wrote custom scripts to generate reports to gain insights from
                  customer data.
                </li>
                <li>
                  Extensively worked on developing the backend from scratch on
                  multiple projects.
                </li>
                <li>
                  Queried large SQL/NoSql datasets to process data through the
                  application.
                </li>
              </ul>
              <h3>Arizona State University (2020)</h3>
              <h4>Student Software Developer</h4>
              <ul>
                <li>
                  Worked with Prof. Mobasher on revamping the existing ASU-SSBE
                  website.
                </li>
                <li>
                  Created detailed sections aggregating data and showcasing it
                  in an intuitive manner.
                </li>
                <li>Architected and organized data on the server.</li>
              </ul>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
