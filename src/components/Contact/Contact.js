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
            <p>sunjid.info@gmail.com</p>
            <p>You can also reach me via at 01521417063</p>
          </div>
          <div className="contact-card">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="form-control"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="form-control"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email Address"
              className="form-control mb-3"
            />

            <textarea
              name="message"
              id=""
              cols="15"
              rows="5"
              className="form-control"
              placeholder="Feel free to drop a message. I'd love to hear from you..."
              required
            ></textarea>

            <input type="submit" value="Send" className="sendMessage" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
