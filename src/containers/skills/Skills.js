import React from "react";
import "./Skills.css";
import { skillsSection } from "../../portfolio";
import {Fade} from "react-reveal";

export default function Skills() {
  return (
    <div className="main" id="skills">
      <div className="skills-main-div">
        {/* <Fade left duration={1000}>
        <div className="skills-image-div">
          <img alt="Saad Working" src={require("../../assets/images/developerActivity.svg")}></img>
        </div>
        </Fade> */}
        <Fade right duration={1000}>
        <div className="skills-text-div">
          <h1 className="skills-heading">{skillsSection.title} </h1>
          <p className="subTitle skills-text-subtitle">{skillsSection.subTitle1}</p>
          {/* <SoftwareSkill /> */}
          <div className="skills-list">
            {skillsSection.languageskills.map(languageskills => {
              return <p className="subTitle skills-text"> <i className={languageskills.fontAwesomeClassname}></i> {languageskills.skillName}</p>;
            })}
          </div>
          <p className="subTitle skills-text-subtitle">{skillsSection.subTitle2}</p>
          <div className="skills-list">
            {skillsSection.languageskills2.map(languageskills => {
              return <p className="subTitle skills-text"> <i className={languageskills.fontAwesomeClassname}></i> {languageskills.skillName}</p>;
            })}
          </div>
        </div>
        </Fade>
      </div>
    </div>
  );
}
