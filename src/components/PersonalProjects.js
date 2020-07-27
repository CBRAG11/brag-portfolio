import React, { Component } from 'react';
export default class PersonalProjects extends Component {
  render() {
    return (
      <React.Fragment>
        {/* Projects */}
        <section id="projects" className="wrapper style3 special">
          <div className="inner">
            <header className="major">
              <h2>Checkout my projects on Github</h2>
            </header>
            <ul className="features">
              <li className="icon fa-plus-square">
                <h3>MedCheck</h3>
                <p>Developed a Drug Interaction Checker in Django using Django Rest Framework.</p>
                <a href="https://github.com/CBRAG11/medcheck-v2" className="button fit primary">View Project</a>
              </li>
              <li className="icon solid fa-code">
                <h3>Netflix Praw Python</h3>
                <p>A simple script to praw (collect) data from multiple subreddits on Reddit and store it in your local database.</p>
                <a href=" https://github.com/CBRAG11/netflix-recommendation-lda" className="button fit primary">View Project</a>
              </li>
              <li className="icon solid fa-laptop">
                <h3>Laravel Lumen Crud</h3>
                <p>A basic CRUD (Create Read Update Delete) application utilizing laravel's lumen API framework.</p>
                <a href="https://github.com/CBRAG11/Laravel-Lumen-CRUD" className="button fit primary">View Project</a>
              </li>
              <li className="icon solid fa-lock">
                <h3>Python MD5 Cracker</h3>
                <p>Custom script to crack a user's password stored as an MD5 Hash in a brute force manner.</p>
                <a href="https://github.com/CBRAG11/Python-Md5Cracker" className="button fit primary">View Project</a>
              </li>
            </ul>
          </div>
        </section>
      </React.Fragment>
    );
  }
}