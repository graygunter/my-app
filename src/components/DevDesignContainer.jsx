import React, { Component } from "react";

class DevDesignContainer extends Component {
  render() {
    return (
      <div className="project-container">
        <h3 className="devDesign">
          {this.props.projectLink ? (
            <a
              href={this.props.projectLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {this.props.projectName}
            </a>
          ) : (
            <a
              href={"https://vimeo.com/" + this.props.vimeoID}
              target="_blank"
              rel="noopener noreferrer"
            >
              {this.props.projectName}
            </a>
          )}
        </h3>

        <div className="iframeWrapper">
          <iframe
            allowFullScreen
            frameBorder="0"
            mozallowfullscreen="true"
            src={
              "https://player.vimeo.com/video/" +
              this.props.vimeoID +
              "?title=0&amp;byline=0&amp;portrait=0"
            }
            title={this.props.id}
            webkitallowfullscreen="true"
          ></iframe>
          <script src="https://player.vimeo.com/api/player.js"></script>
        </div>

        {this.props.clientName ? (
          this.props.clientLink ? (
            <h4>
              <span>Client </span>:&nbsp;
              <a
                href={this.props.clientLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {this.props.clientName}
              </a>
            </h4>
          ) : (
            <h4><span>Client </span>:&nbsp;{this.props.clientName}</h4>
          )
        ) : null}
        {this.props.agencyName ? (
          this.props.agencyLink ? (
            <h4>
              <span>Agency </span>:&nbsp;
              <a
                href={this.props.agencyLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {this.props.agencyName}
              </a>
            </h4>
          ) : (
            <h4>Agency :&nbsp;{this.props.agencyName}</h4>
          )
        ) : null}

        {this.props.role ? (
          <h4>
            <span>Role </span>:&nbsp;
            {this.props.role}
          </h4>
        ) : null}

        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default DevDesignContainer;
