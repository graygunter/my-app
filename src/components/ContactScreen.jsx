import React, { Component } from "react";

class ContactScreen extends Component {
  render() {
    return (
      <div className={this.props.showHide}>
        <div className="cognito">
          <iframe
            frameBorder="0"
            height="450"
            scrolling="yes"
            seamless="seamless"
            src="https://services.cognitoforms.com/f/213mxnhu9EiHnPTd9v0xfA?id=1"
            style={{ minWidth: 100 + "%", width: 100 + "%" }}
            title="contact form"
            width="100%"
          ></iframe>
          <script src="https://services.cognitoforms.com/scripts/embed.js"></script>
        </div>
      </div>
    );
  }
}

export default ContactScreen;
