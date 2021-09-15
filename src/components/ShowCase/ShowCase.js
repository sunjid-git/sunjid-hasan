import React from "react";
import { Link } from "react-router-dom";
import "./ShowCase.css";

export default function ShowCase() {
  return (
    <>
      <section className="show-case">

        {/* projects starts here */}
        <div className="project four-block">
          <div className="inner">
            <Link to="/projects" className="odd-part">
              <div className="inner-text project-text">
                <p>Visit My Works</p>
                <h1>Project</h1>
              </div>
            </Link>
          </div>
        </div>

        {/* blogs starts here */}
        <div className="blog four-block">
          <div className="inner">
            <Link to="/blog"  className="even-part">
              <div className="inner-text">
                <p>Read My Articles</p>
                <h1>Blog</h1>
              </div>
            </Link>
          </div>
        </div>

        {/* about starts here */}
        <div className="about four-block">
          <div className="inner">
            <Link to="/about" className="even-part" >
              <div className="inner-text">
                <p>Continue Exploring?</p>
                <h1>About Me</h1>
              </div>
            </Link>
          </div>
        </div>

        {/* contact starts here */}
        <div className="contact four-block">
          <div className="inner">
            <Link to="/contact" className="odd-part" >
              <div className="inner-text ">
                <p>Interested?</p>
                <h1>Contact Me</h1>
              </div>
            </Link>
          </div>
        </div>

      </section>
    </>
  );
}
