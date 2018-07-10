import React, { Component } from 'react';
import YouTube from 'react-youtube';

class TileVideo extends Component {
  render() {
    const opts = {
      width: 320,
      height: 180,
    };

    return (
      <div>
        <YouTube
          videoId="dMcQidZdaOk"
          opts={opts}
        />
      </div>
    );
  }
}

export default TileVideo;
