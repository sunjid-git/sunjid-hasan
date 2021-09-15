import React from "react";
import "./Blog.css";

import blog1 from "../../images/blog1.png";
import blog2 from "../../images/blog2.jpg";
import blog3 from "../../images/blog3.jpeg";
import blog4 from "../../images/blog4.jpeg";
import blog5 from "../../images/blog5.jpg";
import blog6 from "../../images/blog6.jpg";
import Header from "../Header/Header";

export default function Blog() {
  return (
    <>
    <Header/>
      <section className="blog-page info-background">
        <h1 className="blog-heading">Blogs</h1>
        <div className="blogs">
          <div className="dev-blog">
            <img src={blog1} alt="" className="blog-img" />
            <p>16 Most Important HTML Interview Questions & Answers</p>

            <a
              href="https://sunjid-web.medium.com/commonly-asked-html-interview-questions-81d18f4ef49c"
              rel="noopener noreferrer"
              target="_blank"
              className="resume"
            >
              Read The Article
            </a>
          </div>

          <div className="dev-blog">
            <img src={blog2} alt="" className="blog-img" />
            <p>Most Helpful CSS Interview Questions & Answers</p>

            <a
              href="https://sunjid-web.medium.com/commonly-asked-css-interview-questions-370f7b63e549"
              rel="noopener noreferrer"
              target="_blank"
              className="resume"
            >
              Read The Article
            </a>
          </div>

          <div className="dev-blog">
            <img src={blog3} alt="" className="blog-img" />
            <p>10 Most commonly used Javascript string methods</p>

            <a
              href="https://sunjid-web.medium.com/10-most-commonly-used-javascript-string-methods-eac3dfb5e914"
              rel="noopener noreferrer"
              target="_blank"
              className="resume"
            >
              Read The Article
            </a>
          </div>

          <div className="dev-blog">
            <img src={blog4} alt="" className="blog-img" />
            <p>Frequently asked: React JS Interview Questions and Answers</p>

            <a
              href="https://sunjid-web.medium.com/commonly-asked-react-interview-questions-c05462bdd41f"
              rel="noopener noreferrer"
              target="_blank"
              className="resume"
            >
              Read The Article
            </a>
          </div>

          <div className="dev-blog">
            <img src={blog5} alt="" className="blog-img" />
            <p>mongoDB Interview Questions and Answers</p>

            <a
              href="https://sunjid-web.medium.com/commonly-asked-mongodb-interview-questions-2c5510ff3e4e"
              rel="noopener noreferrer"
              target="_blank"
              className="resume"
            >
              Read The Article
            </a>
          </div>

          <div className="dev-blog">
            <img src={blog6} alt="Blog" className="blog-img" />

            <p>Commonly Asked Node.js Interview Questions</p>
            <a
              href="https://sunjid-web.medium.com/commonly-asked-node-js-interview-questions-691fbf486fa8"
              rel="noopener noreferrer"
              target="_blank"
              className="resume"
            >
              Read The Article
            </a>
          </div>
        </div>


      </section>
    </>
  );
}
