import React, { Component } from "react";

export default class Courses extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="courses" className="wrapper style5">
          <div className="inner">
            <header className="major">
              <h2>Courses Taken</h2>
              <div className="table">
                <table>
                  <thead>
                    <tr>
                      <td>Data Mining</td>
                      <td>Business Intelligence</td>
                      <td>AI in Business</td>
                      <td>Data Visualization</td>
                      <td>Analysis of Algorithms</td>
                      <td>Theoretical Computing</td>
                    </tr>
                    <tr>
                      <td>Database Management Systems</td>
                      <td>Business Process Analysis</td>
                      <td>Information Security and Controls</td>
                      <td>Emerging Technologies</td>
                      <td>Data Structures</td>
                      <td>Operating Systems</td>
                    </tr>
                    <tr>
                      <td>Computer Networks</td>
                      <td>Computer Organization and Architecture</td>
                      <td>Information Enabled Business Modeling</td>
                      <td>IT Services and Project Management</td>
                      <td>Strategic Value of Information Technology</td>
                      <td>Computer Graphics</td>
                    </tr>
                  </thead>
                </table>
              </div>
            </header>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
