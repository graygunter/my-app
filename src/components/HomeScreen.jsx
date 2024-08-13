import React, { Component } from "react";

import Menu from "./Menu";
import Projects from "./Projects";
import Logo from "../imgs/graybear_logo.svg";

class HomeScreen extends Component {
  render() {
    return (
      <div className={this.props.showHide}>
        <div className="homeScreen">
          <img
            alt="Graybear LLC. Since 2011"
            className="logo"
            src={Logo}
          />

          <Menu
            isDevDesign={this.props.isDevDesign}
            isUXUI={this.props.isUXUI}
            isArt={this.props.isArt}
            menuPressed={this.props.menuPressed}
          />

          <Projects
            isDevDesign={this.props.isDevDesign}
            isUXUI={this.props.isUXUI}
            isArt={this.props.isArt}
            projectsData={this.props.projectsData}
          />
        </div>
      </div>
    );
  }
}

export default HomeScreen;
