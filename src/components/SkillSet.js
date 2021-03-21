import React, { Component } from "react";

export default class SkillSet extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="skills" className="skillSet">
          <section className="spotlight">
            <div className="image">
              <img src="%PUBLIC_URL%/../images/mac.jpg" alt="" />
            </div>
            <div className="content">
              <h3>Software Engineering / Data Analytics</h3>
              <div className="table skillset-table">
                <table>
                  <tbody>
                    <tr>
                      <td>Programming Languages</td>
                      <td>Python</td>
                      <td>JavaScript</td>
                      <td>PHP</td>
                      <td>R</td>
                    </tr>
                    <tr>
                      <td>Frameworks/Libraries</td>
                      <td>Django</td>
                      <td>React</td>
                      <td>NodeJS</td>
                      <td>Cypress</td>
                    </tr>
                    <tr>
                      <td>Databases</td>
                      <td>MySQL</td>
                      <td>PostgreSQL</td>
                      <td>MongoDB</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Data Analytics</td>
                      <td>Azure ML</td>
                      <td>Pandas</td>
                      <td>Numpy</td>
                      <td>Scikit Learn</td>
                    </tr>
                    <tr>
                      <td>Data Visualization</td>
                      <td>Tableau</td>
                      <td>Power BI</td>
                      <td>Microsoft Excel</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Tools</td>
                      <td>Github/BitBucket</td>
                      <td>AWS</td>
                      <td>Docker</td>
                      <td>Jira</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
          <section className="spotlight">
            <div className="image">
              <img src="%PUBLIC_URL%/../images/race.png" alt="" />
            </div>
            <div className="content">
              <h3>Motorsports</h3>
              <div className="table">
                <table>
                  <tbody>
                    <tr>
                      <td>JK Tyre National Rotax Karting Championship</td>
                    </tr>
                    <tr>
                      <td>MRF National Formula 4 Championship</td>
                    </tr>
                  </tbody>
                </table>
                <a
                  href="https://drivenbybrag.blogspot.com/2018/08/the-tesla-roadster-everything-youd-ever.html"
                  className="button fit"
                >
                  View Blog
                </a>
              </div>
            </div>
          </section>
        </section>
      </React.Fragment>
    );
  }
}
