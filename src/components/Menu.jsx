import React, { Component } from "react";

class Menu extends Component {
  constructor() {
    super();

    this.buildMenu = this.buildMenu.bind(this);
  }

  buildMenu() {
    return (
      <div className={"menu"}>
        <div
          className={this.props.isDevDesign ? "inactive" : "active"}
          menu-title="DevDesign"
          onClick={this.props.isDevDesign ? null : this.props.menuPressed}
        >
          Dev &amp; Design
        </div>
        <div
          className={this.props.isUXUI ? "inactive" : "active"}
          menu-title="UXUI"
          onClick={this.props.isUXUI ? null : this.props.menuPressed}
        >
          UX &amp; UI
        </div>
        <div
          className={this.props.isArt ? "inactive" : "active"}
          menu-title="Art"
          onClick={this.props.isArt ? null : this.props.menuPressed}
        >
          Art
        </div>

      </div>
    );
  }

  render() {
    return <div>{this.buildMenu()}</div>;
  }
}

export default Menu;
