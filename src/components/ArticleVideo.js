import React, { Component } from 'react';
import YouTube from 'react-youtube';

class ArticleVideo extends Component {
  render() {
    const opts = {
      width: 320,
      height: 180,
    };

    return (
      <div>
        <YouTube
          videoId="fCBusmHtFuU"
          opts={opts}
        />
      </div>
    );
  }
}

export default ArticleVideo;
