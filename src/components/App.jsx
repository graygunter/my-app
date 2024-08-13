import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faEnvelope,
  faArrowAltCircleDown,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import Nav from "./Nav";
import HomeScreen from "./HomeScreen";
import ContactScreen from "./ContactScreen";

import devdesignData from "../json/devdesign.json";
import uxuiData from "../json/uxui.json";
import artData from "../json/art.json";

class App extends Component {
  constructor() {
    library.add(
      faHome,
      faEnvelope,
      faArrowAltCircleDown,
      faTwitter,
      faInstagram,
      faLinkedin
    );

    super();

    this.contactPressed = this.contactPressed.bind(this);
    this.menuPressed = this.menuPressed.bind(this);

    this.state = {
      isHome: true,
      isDevDesign: false,
      isUXUI: false,
      isArt: true
    };
  }

  contactPressed() {
    this.state.isHome
      ? this.setState({ isHome: false })
      : this.setState({ isHome: true });
  }


  menuPressed(event) {

    this.setState({
      isDevDesign: false, 
      isUXUI: false, 
      isArt: false});

    let menuTitle = event.currentTarget.getAttribute("menu-title");

    menuTitle === "DevDesign" 
      ? this.setState({
        isDevDesign: true}) 
      : 
    menuTitle === "UXUI" 
      ? this.setState({
        isUXUI: true})
      :
    menuTitle === "Art" 
      ? this.setState({
        isArt: true})
      : console.log();
  }

  render() {
    return (
      <div className="container">
        <header>
          <Nav
            className="headerNav"
            contactPressed={this.contactPressed}
            isHome={this.state.isHome}
          />
        </header>

        <HomeScreen
          isDevDesign={!!this.state.isDevDesign}
          isUXUI={!!this.state.isUXUI}
          isArt={!!this.state.isArt}
          menuPressed={this.menuPressed}
          projectsData={
            this.state.isDevDesign ? devdesignData.devdesign :
            this.state.isUXUI ? uxuiData.uxui :
            this.state.isArt ? artData.art :
            null
          }
          showHide={this.state.isHome ? "show" : "hide"}
        />

        <ContactScreen showHide={this.state.isHome ? "hide" : "show"} />

        <ScrollAnimation
          animateIn="fadeIn"
          animateOnce
          className="footer"
          offset={0}
        >
          Copyright &copy; Graybear&nbsp;
          {new Date().getFullYear()}
        </ScrollAnimation>
      </div>
    );
  }
}

export default App;
