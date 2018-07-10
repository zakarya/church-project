import React, { Component } from 'react';
import YouTube from 'react-youtube';

class ArticleVideo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videoTitle: '',
    };
  }

  render() {
    const opts = {
      width: 320,
      height: 180,
    };

    const getTitle = (event) => {
      const player = event.target;
      const data = player.getVideoData();
      this.setState({ videoTitle: data.title });
    };

    return (
      <div>
        <YouTube
          videoId="fCBusmHtFuU"
          opts={opts}
          onReady={getTitle}
        />
        <h4>
          {this.state.videoTitle}
        </h4>
        <p>
          Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
      </div>
    );
  }
}

export default ArticleVideo;
