import React from "react";
import HowSolarWorksHelp from "./HowSolarWorksHelp";
import img from "../Images/solar1.png";

function HowSolarWorks() {
  return (
    <div className="mx-2">
      <div className="">
        <img src={img} className="d-block w-100" alt="..." />
      </div>
      <div className="fw-bold fs-5 text-center p-3">
        Photovoltaics, often abbreviated as PV, is a technology that involves
        the conversion of sunlight directly into electricity. It is a method of
        harnessing solar energy by using semiconducting materials, typically
        silicon, to create solar cells. These solar cells capture photons (light
        particles) from the sun and convert them into electrical current. The
        generated electricity can then be used to power various devices, homes,
        businesses, and even contribute to the overall energy grid. In simpler
        terms, photovoltaics is the science and technology behind solar panels
        that allow them to produce electricity from sunlight.
      </div>
      <HowSolarWorksHelp />
    </div>
  );
}

export default HowSolarWorks;
