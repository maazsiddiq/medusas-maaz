import React from "react";
import landImg from "../../../images/medusa.svg";
import launchingApp from "../../../images/LaunchingAppBanner.svg";

export default function Landing() {
  return (
    <div>
      <img src={landImg} width="100%" height="400px"></img>

      <img src={launchingApp}></img>
    </div>
  );
}
