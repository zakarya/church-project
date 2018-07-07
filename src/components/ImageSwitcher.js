import React, { Component } from 'react';
import Thumbnail from './Thumbnail';

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
    <div>
      <img src={selectedImage.url} alt={selectedImage.alt} />
      {thumbnails}
    </div>
  );
};

export default ImageSwitcher;
