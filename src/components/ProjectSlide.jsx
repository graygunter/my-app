import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

class ProjectSlide extends Component {
  constructor() {
    library.add(faWindowClose);

    super();
  }

  render() {
    return (
      <div className={"slide"}>
        <img
          alt={this.props.longDescription}
          src={require(`../imgs/slides/${this.props.isUXUI ? "uxui" : "art"}/${this.props.img}`)}
        />
        <p className="legend">{this.props.longDescription}</p>
        <FontAwesomeIcon
          icon={"window-close"}
          onClick={this.props.slideShowClosed}
          size="3x"
        />
      </div>
    );
  }
}

export default ProjectSlide;
