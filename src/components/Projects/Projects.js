import React from "react";
import "./Projects.css";

import project1 from "../../images/project1.PNG";
import project2 from "../../images/project2.PNG";
import project3 from "../../images/project3.PNG";
import project4 from "../../images/project4.PNG";
import project5 from "../../images/project5.PNG";
import project6 from "../../images/project6.PNG";
import Header from "../Header/Header";

export default function Projects() {
  return (
    <>
    <Header/>
      <section className="projects info-background">
        <h1 className="heading">Projects</h1>

        {/* my cards */}
        <div className="project-cards">
          <div className="project-card">
            <img src={project1} alt="project1" />
            <h2>Bengal It Plus</h2>
            <p>
              An online electronic gadget store having multiple functionality
              including dynamic data loading & review section with relevant
              information.
            </p>

            <div>
              <a
                href="https://github.com/sunjid-git/bengal-it-plus"
                rel="noopener noreferrer"
                target="_blank"
                className="stay-in-touch"
              >
                Visit GitHub
              </a>

              <a
                href="https://bengal-it-plus.web.app/"
                rel="noopener noreferrer"
                target="_blank"
                className="resume"
              >
                Visit Website
              </a>
            </div>
          </div>

          <div className="project-card">
            <img src={project2} alt="project1" />
            <h2>Bengal Shop</h2>
            <p>
              Online grocery shop with functionality also has image with some
              relevant information uploading facility.
            </p>

            <div>
              <a
                href="https://github.com/sunjid-git/bengal-shop-client"
                rel="noopener noreferrer"
                target="_blank"
                className="stay-in-touch"
              >
                Visit GitHub
              </a>

              <a
                href="https://bengalshop-buy.web.app/home"
                rel="noopener noreferrer"
                target="_blank"
                className="resume"
              >
                Visit Website
              </a>
            </div>
          </div>

          <div className="project-card">
            <img src={project3} alt="project1" />
            <h2>Weather Check</h2>
            <p>
              Basic JavaScript project where Dynamic city search functionality
              that shows weather status of the particular region by using data
              from open weather api.
            </p>

            <div>
              <a
                href="https://github.com/sunjid-git/weatherCheck"
                rel="noopener noreferrer"
                target="_blank"
                className="stay-in-touch"
              >
                Visit GitHub
              </a>

              <a
                href="https://sunjid-git.github.io/weatherCheck/"
                rel="noopener noreferrer"
                target="_blank"
                className="resume"
              >
                Visit Website
              </a>
            </div>
          </div>

          <div className="project-card">
            <img src={project4} alt="project1" />
            <h2>Bengal Transport</h2>
            <p>
              An online store with multiple service option and functionality
              like dynamic data loading with relevant information and dynamic
              review section.
            </p>

            <div>
              <a
                href="https://github.com/sunjid-git/bengal-transport"
                rel="noopener noreferrer"
                target="_blank"
                className="stay-in-touch"
              >
                Visit GitHub
              </a>

              <a
                href="https://keen-lewin-28a3ed.netlify.app/"
                rel="noopener noreferrer"
                target="_blank"
                className="resume"
              >
                Visit Website
              </a>
            </div>
          </div>

          <div className="project-card">
            <img src={project5} alt="project1" />
            <h2>Surokkha Web site Clone</h2>
            <p>
              Static clone of Surokkha.gov.bd website. It has got all the
              representational components. Not yet done. Responsiveness
              functionality has yet to complete. Hope to transfer it into react
              soon.
            </p>

            <div>
              <a
                href="https://github.com/sunjid-git/covid-19-vaccine-website"
                rel="noopener noreferrer"
                target="_blank"
                className="stay-in-touch"
              >
                Visit GitHub
              </a>

              <a
                href="https://0zr7cfqfmwk1zfncafdgig-on.drv.tw/Websites/www.surokkha-website.com/html/home.html"
                rel="noopener noreferrer"
                target="_blank"
                className="resume"
              >
                Visit Website
              </a>
            </div>
          </div>

          <div className="project-card">
            <img src={project6} alt="project1" />
            <h2>Personal Website</h2>
            <p>
              An online store with multiple service option and functionality
              like dynamic data loading with relevant information and dynamic
              review section.
            </p>

            <div>
              <a
                href="https://github.com/sunjid-git/sunjid-portfolio-website"
                rel="noopener noreferrer"
                target="_blank"
                className="stay-in-touch"
              >
                Visit GitHub
              </a>

              <a
                href="https://sunjid-hasan.web.app/"
                rel="noopener noreferrer"
                target="_blank"
                className="resume"
              >
                Visit Website
              </a>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
}
