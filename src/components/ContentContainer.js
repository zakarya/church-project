import React, { Component } from 'react';
import './ContentContainer.css';

class ContentContainer extends Component {
  constructor(props) {
    super(props);

    this.content = this.createMarkup();
  }

  createMarkup() {
    return { __html: this.props.content };
  }

  render() {
    return (
      <div
        className="content-container"
        dangerouslySetInnerHTML={this.content}
      />
    );
  }
}
// const ContentContainer = (props) => {
//   const content = props.content;

//   return (
//     <div dangerouslySetInnerHTML={content} />
//   );
// };

export default ContentContainer;
