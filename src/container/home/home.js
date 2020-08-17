import React from "react";
import Landing from "../../components/home_components/landing-section/landing";
import Advisors from "../../components/home_components/advisors-section/adivisors";
import Contact from "../../components/home_components/contact-section/contact";
import Featured from "../../components/home_components/featured-section/featured";

export default function Home() {
  return (
    <div>
      <Landing />
      <Advisors />
      <Contact />
      <Featured />
    </div>
  );
}
