import React, { Component } from 'react';
export default class Experience extends Component {
  render() {
    return (
      <React.Fragment>
        {/* Experience */}
        <section id="experience" className="wrapper style4">
          <div className="inner">
            <header className="major">
              <h2>My Professional Experience?</h2>
            </header>
            <div className="table experience-table">
              <table>
                <thead>
                  <tr>
                    <td>Organization</td>
                    <td>Role</td>
                    <td></td>
                    <td>Responsibilities</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Ambab Infotech (2018-2019)</td>
                    <td>Software Engineer</td>
                    <td>Delivered full-stack Web Apps using agile methodologies.</td>
                    <td>Extensively worked on developing the backend from scratch on multiple projects.</td>
                    <td>Queried large SQL/NoSql datasets to process data through the application.</td>
                  </tr>
                  <tr>
                    <td>AerialSphere (2020)</td>
                    <td>Software Engineer Intern</td>
                    <td>Integrated Django GIS within the existing system.</td>
                    <td>Developed APIs on the Django REST Framework.</td>
                    <td>Worked on mapbox integration into the project.</td>
                  </tr>
                  <tr>
                    <td>Arizona State University (2020)</td>
                    <td>Student Software Developer</td>
                    <td>Worked with Prof. Mobasher on revamping the existing ASU-SSBE website.</td>
                    <td>Created detailed sections aggregating data from the ground up.</td>
                    <td>Architected and organized data on the server.</td>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}