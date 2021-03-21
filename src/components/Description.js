import React, { Component } from "react";

export default class ProfessionalBackground extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="description" className="wrapper style1 special">
          <div className="inner">
            <header className="major">
              <h2>Who am I?</h2>
              <p className="description">
                Hello! I'm Clinton, a Software Engineer based in Phoenix, AZ.
              </p>
              <p className="description">
                I relish creating stuff, whether that be web applications,
                APIs, or anything in between. My goal is to always build
                products with the end-user as the center of focus.
              </p>
              <p className="description">
                I've pursued my Bachelor's degree in Computer Engineering from
                the University of Mumbai, soon after which my curiosity into
                Data Science / IT Management led me to a Master's degree in
                Information Systems specializing in Data Analytics at WP Carey.
                Post graduation, I joined the engineering team at AerialSphere
                where I work on a wide variety of interesting and meaningful
                projects on a daily basis.
              </p>
              <p className="description">
                Beyond engineering, I am immensely passionate about automobiles
                / motorsports and have raced in national Karting and Formula 4
                Championships.
              </p>
            </header>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
