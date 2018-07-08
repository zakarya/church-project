import React from 'react';
import Thumbnail from './Thumbnail';

import './ImageSwitcher.css';

const ImageSwitcher = (props) => {
  const selectedImage = props.selectedImage;
  const thumbnails = props.images.map(image => (
    <Thumbnail
      image={image}
      key={image.url}
      onImageSelect={props.onImageSelect}
    />
  ));

  return (
    <div className="switcher-container">
      <img src={selectedImage.url} alt={selectedImage.alt} />
      <div className="thumbnail-container">
        {thumbnails}
      </div>
      <div className="caption">
        <h4>
          {selectedImage.alt}
        </h4>
      </div>
    </div>
  );
};

export default ImageSwitcher;
