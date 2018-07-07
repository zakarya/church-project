import React from 'react';

const Thumbnail = ({ image, onImageSelect }) => (
  <div
    onClick={() => onImageSelect(image)}
    onKeyPress={() => onImageSelect(image)}
    role="link"
    tabIndex="0"
  >
    <img src={image.thumb} alt={image.alt} />
  </div>
);

export default Thumbnail;
