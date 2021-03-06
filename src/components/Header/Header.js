import React from "react";
import "./Header.css";
import sunjid from "../../images/sunjid.svg";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <header>
        <div className="header">
          <div>
            <img src={sunjid} className="sunjid" alt="sunjid" />
          </div>

          <div className="header-link">
            <nav>
              <ul>
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/projects">Projects</Link>
                </li>
                <li>
                  <Link to="/blog">Blogs</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>

                <a
                  className="resume"
                  href="https://drive.google.com/file/d/1qiRPUCdlLNBYOn4VJIU563RO64uawqY-/view?usp=sharing"
                  rel="noopener noreferrer"
                  target="_blank"
                  download
                >
                  Resume
                </a>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
