import React, { Component } from 'react';
import './ContentContainer.css';

class ContentContainer extends Component {
  constructor(props) {
    super(props);

    this.heading = this.props.content.heading;
    this.content = this.createMarkup();
  }

  createMarkup() {
    return { __html: this.props.content.content };
  }

  render() {
    return (
      <div className="content-container">
        <h2>
          {this.heading}
        </h2>
        <div
          dangerouslySetInnerHTML={this.content}
        />
      </div>
    );
  }
}

export default ContentContainer;
