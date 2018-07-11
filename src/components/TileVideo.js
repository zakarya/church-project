import React from 'react';
import YouTube from 'react-youtube';

import './TileVideo.css';

const TileVideo = (props) => {
  const opts = {
    width: 320,
    height: 180,
  };

  return (
    <div className="tile-video">
      <YouTube
        videoId="dMcQidZdaOk"
        opts={opts}
        onPlay={props.playTransition}
      />
    </div>
  );
};

export default TileVideo;
