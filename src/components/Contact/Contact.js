import React from "react";
import "./Contact.css";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";

import emailjs from "emailjs-com";

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ee5rduq",
        "template_ifn2lde",
        e.target,
        "user_auDCWQqpwHwe2nHdx1rCG"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <>
      <Header />
      <section className="contact-page info-background">
        <h1 className="heading">Contact</h1>
        <div className="contacts">
          <div className="contact-card">
            <h1>Let's talk about everything!</h1>
            <p>Don't like forms? Send me an email 👋</p>
            <strong>sunjid.info@gmail.com</strong>
            <p>You can also reach me via at <strong>01521417063</strong></p>
          </div>
          <div className="contact-card">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="email-input"
            />
{/* 
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="email-input"
            /> */}

            <input
              type="email"
              name="email"
              placeholder="Your Email Address"
              className="email-input"
            />

            <textarea
              name="message"
              id=""
              cols="25"
              rows="10"
              className="email-input"
              placeholder="Feel free to drop a message. I'd love to hear from you..."
              required
            ></textarea>

            <input type="submit" value="Send" className="send-email" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
