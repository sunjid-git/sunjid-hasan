import React from "react";

import ShowCase from "../ShowCase/ShowCase";
import WhoYouAre from "../WhoYouAre/WhoYouAre";
import Header from './../Header/Header';
import Footer from './../Footer/Footer';

export default function Home() {
  return (
    <>
    <Header/>
      <WhoYouAre />
      <ShowCase />
      <Footer/>
    </>
  );
}
