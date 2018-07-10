import React from 'react';
import YouTube from 'react-youtube';

const TileVideo = (props) => {
  const opts = {
    width: 320,
    height: 180,
  };

  return (
    <div>
      <YouTube
        videoId="dMcQidZdaOk"
        opts={opts}
        onPlay={props.playTransition}
      />
    </div>
  );
};

export default TileVideo;
