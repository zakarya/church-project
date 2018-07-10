import React, { Component } from 'react';
import YouTube from 'react-youtube';

class TransitionVideo extends Component {
  render() {
    const opts = {
      width: 960,
      height: 540,
    };

    return (
      <div>
        <YouTube
          videoId="dMcQidZdaOk"
          opts={opts}
          containerClassName="transition-video"
          onReady={this.props.getVideoTarget}
        />
      </div>
    );
  }
}

export default TransitionVideo;
