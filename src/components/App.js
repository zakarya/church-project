import React, { Component } from 'react';
import Title from './Title';
import ImageSwitcher from './ImageSwitcher';
import images from '../data/images';

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
      <div>
        <h1>
          Hello World
        </h1>
        <Title />
        <ImageSwitcher
          images={this.state.images}
          onImageSelect={selectedImage => this.setState({ selectedImage })}
          selectedImage={this.state.selectedImage}
        />
      </div>
    );
  }
}

export default App;
