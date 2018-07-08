import React, { Component } from 'react';
import Title from './Title';
import ImageSwitcher from './ImageSwitcher';
import images from '../data/images';

import './App.css';
import Article from './Article';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images,
      selectedImage: images[0],
    };
  }

  render() {
    return (
      <div className="root">
        <Title />
        <ImageSwitcher
          images={this.state.images}
          onImageSelect={selectedImage => this.setState({ selectedImage })}
          selectedImage={this.state.selectedImage}
        />
        <Article />
      </div>
    );
  }
}

export default App;
