import './App.css';
import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Header from './components/Header';
import Description from './components/Description';
import Experience from './components/Experience';
import SkillSet from './components/SkillSet';
import Courses from './components/Courses';
import PersonalProjects from './components/PersonalProjects';
import Footer from './components/Footer';

const particlesOptions = {
  particles: {
    number: {
      value: 63,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#7bf"
    },
    opacity: {
      value: 1,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    move: {
      enable: true,
      speed: .63,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  retina_detect: true
};


class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute' }}></div>
          <Particles className="particles" params={particlesOptions} />
          <Header />
          <Description />
          <Experience />
          <SkillSet />
          <Courses />
          <PersonalProjects />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
