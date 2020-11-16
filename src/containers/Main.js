import React, { Component } from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import Achievement from "./achievement/Achievement";
import Top from "./topbutton/Top";
import Profile from "./profile/Profile";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Greeting />
        {/* <Skills />
        <WorkExperience />
        <Projects />
        <Achievement />
        <Profile />
        <Top /> */}
      </div>
    );
  }
}
