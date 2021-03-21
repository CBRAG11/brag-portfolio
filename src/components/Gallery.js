import React, { Component } from "react";

export default class Gallery extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="gallery" className="wrapper style3 special">
          <div className="inner">
            <header className="major">
              <h2>The Gallery</h2>
            </header>
            <div className="video-gallery">
              <div className="gallery-item">
                <div className="video-container">
                  <iframe
                    title="MMRT qualifying"
                    src="https://www.youtube.com/embed/GPrf0kE3nfw/"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className="gallery-item">
                <div className="video-container">
                  <iframe
                    title="three way duel at MMRT"
                    src="https://www.youtube.com/embed/ZiJ4FENAcyE?origin=https://cbrag11.github.io/brag-portfolio/"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className="gallery-item">
                <div className="video-container">
                  <iframe
                    title="race 1 at MMRT"
                    src="https://www.youtube.com/embed/U8W64hQnW-o?origin=https://cbrag11.github.io/brag-portfolio/"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className="gallery-item">
                <div className="video-container">
                  <iframe
                    title="crazy overtake at MMRT"
                    src="https://www.youtube.com/embed/R6LZ-jW3MaM?origin=https://cbrag11.github.io/brag-portfolio/"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
