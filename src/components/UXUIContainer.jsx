import React, { Component } from "react";

const folder = "uxui";

class UXUIContainer extends Component {
  render() {
    return (
      <div className="project-container">
        <div
          onClick={() =>
            this.props.slideShowClicked(
              this.props.slides,
              this.props.longDescription
            )
          }
        >
          <h3>{this.props.name}</h3>

          <img
            alt={this.props.altText}
            className={"thumbnail"}
            src={require(`../imgs/thumbnails/${folder}/${this.props.thumbnail}`)}
          />

          <p>{this.props.briefDescription}</p>
        </div>
      </div>
    );
  }
}

export default UXUIContainer;
