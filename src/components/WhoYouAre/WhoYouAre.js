import React from "react";
import "./WhoYouAre.css";

import git from "../../images/git.svg";
import lin from "../../images/lin.svg";
import fb from "../../images/fb.svg";
import { Link } from "react-router-dom";

export default function WhoYouAre() {
  return (
    <>
      <section className="info-background">
        <div className="info-inner">
          <div>
            <div className="text-box">
              <span>S</span>
              <span>U</span>
              <span>N</span>
              <span>J</span>
              <span>I</span>
              <span>D</span>
            </div>
          </div>

          <div>
            <h1>Engineer | Web Developer</h1>
          </div>

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

          <div>
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
    </>
  );
}
