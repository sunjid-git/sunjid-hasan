import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ShowCase from "../ShowCase/ShowCase";
import WhoYouAre from "../WhoYouAre/WhoYouAre";

export default function Home() {
  return (
    <>
      <Header />
      <WhoYouAre />
      <ShowCase />
      <Footer />
    </>
  );
}
