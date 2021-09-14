import React from "react";
import "./Blog.css";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";

import b1 from "../../images/b1.jpeg";
import b2 from "../../images/b2.jpg";
import b3 from "../../images/b3.jpg";

export default function Blog() {
  return (
    <>
      <Header />
      <section className="blog-page info-background">
        <div className="container">
          <h1 className="text-center text-success font-weight-bolder p-5">
            My Blogs
          </h1>
          <div className="row">
            <div className="col-md-4 d-flex justify-content-center">
              <a
                className="nav-link active  text-light"
                href="https://sunjid-web.medium.com/network-topology-686c7de9f973"
                target="blank"
              >
                <div className="blogCard mb-5">
                  <img className="serviceImg" src={b1} alt="" />
                  <div className="text-center text-light m-3">
                    <h5 className="py-2">
                      10 Most commonly used Javascript string methods
                    </h5>
                    <p className="text-">
                      This article is all about some basic methods that we all
                      use oftenly.
                    </p>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-md-4 d-flex justify-content-center">
              <a
                className="nav-link active  text-light"
                href="https://sunjid-web.medium.com/network-topology-686c7de9f973"
                target="blank"
              >
                <div className="blogCard mb-5">
                  <img className="serviceImg" src={b2} alt="" />
                  <div className="text-center text-light m-3">
                    <h5 className="py-2">Network Topology</h5>
                    <p className="text-">
                      {" "}
                      Basic Network Topology with visualization are discussed
                      here.
                    </p>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-md-4 d-flex justify-content-center">
              <a
                className="nav-link active  text-light"
                href="https://sunjid-web.medium.com/10-most-commonly-used-javascript-string-methods-eac3dfb5e914"
                target="blank"
              >
                <div className="blogCard mb-5">
                  <img className="serviceImg" src={b3} alt="" />
                  <div className="text-center text-light m-3">
                    <h5 className="py-2">
                      Network protocols and standards organizations
                    </h5>
                    <p className="text-">
                      What is network protocols and which companies are behind
                      the the network world are introduced here.{" "}
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
