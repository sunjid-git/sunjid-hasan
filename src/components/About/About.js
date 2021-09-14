import React from "react";
import "./About.css";
import Footer from "../Footer/Footer";
import Header from "./../Header/Header";

import sunjid from "../../images/sunjid.jpg";

export default function About() {
  return (
    <>
      <Header />
      <section className="info-background">
      
          <h1 className="heading">About</h1>
       
        <div className="about-page">
          <img src={sunjid} alt="Sunjid" className="my-picture" />

          <p className="my-description">
            Hi, This is <strong>Sunjid Hasan</strong>, Glad to meet you. I am a
            self-taught front-end web developer with a Bachelor's in Computer
            Science and Engineering. I count myself as a continuous learner and
            committed to developing myself with trial, error and success in the
            way of my learning path...
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}
