import React from "react";
import "./About.css";

import git from "../../images/git.svg";
import lin from "../../images/lin.svg";
import fb from "../../images/fb.svg";
import { Link } from "react-router-dom";

import sunjid from "../../images/sunjid.jpg";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function About() {
  return (
    <>
    <Header/>
      <section className="info-background">
        <h1 className="heading">About</h1>

        <div className="about-page">
          <img src={sunjid} alt="Sunjid" className="my-picture" />

          <div>
            <a
              href="https://www.facebook.com/sunjid.info/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={fb} alt="Facebook" className="social" />
            </a>

            <a
              href="https://www.linkedin.com/in/sunjid-in/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={lin} alt="linkedIn" className="social" />
            </a>

            <a
              href="https://github.com/sunjid-git"
              target="_blank"
              rel="noreferrer"
            >
              <img src={git} alt="git" className="social" />
            </a>
          </div>

          <p className="my-description">
            Hi, This is <strong>Sunjid Hasan</strong>. I am a
            self-taught front-end web developer with a Bachelor's in Computer
            Science and Engineering. I have been developing my skills in Front end Technology. As a keen individual, I have enriched my profile with some works.  I count myself as a continuous learner and
            committed to developing myself. Should you be interested in taking a look at works. Thank you...
          </p>

          <div className="double-btn">
            <Link to="/contact" className="stay-in-touch" alt="Stay in touch">
              Let's Get In Touch
            </Link>

            <a
              className="resume"
              href="https://drive.google.com/u/0/uc?id=1qiRPUCdlLNBYOn4VJIU563RO64uawqY-&export=download"
              rel="noopener noreferrer"
              target="_blank"
              download
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}
